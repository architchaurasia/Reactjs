import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Body from "./Body";

//Default import
import Header from "./Header";
//Named import
// import { Title } from "./Header.js";
//import all
//import * as Head from "./Header"

/**
 * Header
 *  - Logo
 *  - Nav Items(Right side)
 *  - Cart
 * Body
 *  - Search
 *  - Restaurant List
 *   - Restaurant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - Link
 *  - Copyright
 *
 */

const Applayout = () => (
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
