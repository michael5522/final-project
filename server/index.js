/* eslint-disable */
require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.use(staticMiddleware);
// test
app.get('/api/hello', (req, res) => {
  console.log('ola1');
  res.json({ hello: 'world' });
});

// registration
app.post('/api/auth/sign-up', (req, res, next) => {
  console.log('post SIGN UP');
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password);
  if (!firstName || !lastName || !email || !password) {
    throw new ClientError(400, 'required fields not all filled out');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      console.log('111', hashedPassword);
      console.log('222', password);
      const sql = `
      insert into "users" ("firstName", "lastName", "email", "password")
      values($1, $2, $3, $4)
      returning "userId",
                "firstName",
                "lastName",
                "email",
                "password",
                "createdAt"
      `;
      const params = [firstName, lastName, email, hashedPassword];
      db.query(sql, params)
        .then(result => {
          const [newUser] = result.rows;
          res.status(201).json(newUser);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});
//sign in
app.post('/api/auth/sign-in', (req, res, next) => {
  console.log('post SIGN IN')
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ClientError(401, 'invalid login MISSING EMAIL OR PW');
  }

  const sql = `
        select  "userId",
                "password"
        from "users"
        where "email" = $1
      `;
  const params = [email];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      console.log('111', user)
      if (!user) {
        throw new ClientError(401, 'invalid login USER NO EXIST');
      }
      const {userId} = user;
      return argon2
        .verify(user.password, password)
        .then(isMatching => {
          console.log('does your password match?', isMatching);
          if (!isMatching) {
            throw new ClientError(401, 'invalid login WRONG PASSWORD');
          }
          const payload = {userId, email};
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.status(200).json({ payload, token });
        })
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
