import React from 'react';
import AppContext from '../lib/app-context';
import Carousel from '../components/carousel';
import MenuInfo from '../components/menu-info';

// export default function Home(props) {
//   return (
//     <div className="container">
//       <div className="row mb-2">
//         <div className="col">
//           <h2 className="mt-1">Online</h2>
//           <h2>Wedding Planning</h2>
//           <h2>Assistant</h2>
//           <h5 className="mb-3">Get started with planning</h5>
//           <a href="#register" className="btn btn-outline-secondary mt-2" role="button">Sign up for free!</a>

//         </div>
//         <div className="col d-flex align-items-center">
//           <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="rounded img-fluid" alt="Responsive image" />
//         </div>
//       </div>
//       <div className="row">
//         <h3>Example Benefits:</h3>
//       </div>
//       <div className="row bg-light">
//         <div className="col-md-4 border rounded">
//           <h4>Guest List Manager</h4>
//           <h6 className="italic">Simplify address collection</h6>
//           <p className="text-justify"><br />Whether you’re having a wedding shower, bach party, engagement party or rehearsal dinner, our guest list manager was thoughtfully designed to help you gather guest info and keep it organized for any and all of your events.</p>
//         </div>

//         <div className="col-md-4 border rounded">
//           <h4>Wedding Checklist</h4>
//           <h6 className="italic">A Wedding To-Do List</h6>
//           <p className="text-justify"><br />Add. Remove. Update. <br />
//             Your wedding to-do list is what you make it. <br />
//             Easily update or change to fit your needs.</p>
//         </div>

//         <div className="col-md-4 border rounded">
//           <h4>Budgeter</h4>
//           <h6 className="italic">Set up your Budget!</h6>
//           <p className="text-justify"><br />Stay on top of yours spending - keep track of your total budget, prices, deposits, and any outstanding fees</p>
//         </div>
//       </div>
//     </div>
//   );
// }
const pokedex = [
  { url: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', number: 0 },
  { url: 'https://images.unsplash.com/photo-1525441273400-056e9c7517b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', number: 1 },
  { url: 'https://images.unsplash.com/reserve/xd45Y326SvKzSR3Nanc8_MRJ_8125-1.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80', number: 2 },
  { url: 'https://images.unsplash.com/photo-1624067078399-be29c52a2b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', number: 3 },
  { url: 'https://images.unsplash.com/photo-1523974715800-1f7cef033969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', number: 4 }
];

export default class Home extends React.Component {
  render() {
    let homePageButton = null;
    const { user } = this.context;
    if (!user) {
      homePageButton = 'Sign up for Free!';
    } else {
      homePageButton = 'Click to Start Now!';
    }
    return (
      <div className="container">
        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <h2 className="mt-1">Online</h2>
            <h2>Wedding Planning</h2>
            <h2>Assistant</h2>
            <h5 className="mb-3">Get started with planning</h5>
            <a href="#register" className="btn btn-outline-secondary mt-2 splash-button" role="button">{homePageButton}</a>

          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            {/* <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="rounded img-fluid" alt="Responsive image" /> */}
            <Carousel poke={pokedex} />
          </div>
        </div>

        <MenuInfo />
        {/* <div className="row custom-row">
          <div className="col d-flex align-items-center justify-content-center">
            <img src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE1fHx3ZWRkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" className="custom-row-photo" alt="Responsive image" />
          </div>

          <div className="col">
            <div>
              <h3 className="mb-0">Redefining the</h3>
              <h3 className="mb-0">Event Planning</h3>
              <h3 className="mb-10">Experience</h3>
              <p className="mt-3">
                Weddings are full of love, dancing and…planning. There’s a lot of decisions and steps, but with our checklist, you can make sure you have it all! <br />
                Inside the included tools, <strong>you can set your budget.</strong> It’s highly advised this be one of the very first priorities. Why? It’ll set the precedent for everything else.<br />
                You may also <strong>put together the guest list. </strong>Why do you have to do this early? To know approximately what sized wedding venue you’ll be booking! <br />
                <strong>Hiring a planner? </strong>Start with them early on; they have the experience to make the overall process easier.
              </p>

            </div>

          </div>

        </div> */}

        <div className="row">
          <h3>Example Benefits:</h3>
        </div>
        <div className="row bg-light">
          <div className="col-md-4 border rounded">
            <h4>Guest List Manager</h4>
            <h6 className="italic">Simplify address collection</h6>
            <p className="text-justify"><br />Whether you’re having a wedding shower, bach party, engagement party or rehearsal dinner, our guest list manager was thoughtfully designed to help you gather guest info and keep it organized for any and all of your events.</p>
          </div>

          <div className="col-md-4 border rounded">
            <h4>Wedding Checklist</h4>
            <h6 className="italic">A Wedding To-Do List</h6>
            <p className="text-justify"><br />Add. Remove. Update. <br />
              Your wedding to-do list is what you make it. <br />
              Easily update or change to fit your needs.</p>
          </div>

          <div className="col-md-4 border rounded">
            <h4>Budgeter</h4>
            <h6 className="italic">Set up your Budget!</h6>
            <p className="text-justify"><br />Stay on top of yours spending - keep track of your total budget, prices, deposits, and any outstanding fees</p>
          </div>
        </div>

      </div>
    );
  }
}

Home.contextType = AppContext;
