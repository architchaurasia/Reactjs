import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Error from "./Error";


const Applayout = () => (
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
  },
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
