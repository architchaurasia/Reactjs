import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";


const Applayout = () => (
  <React.Fragment>
    <Header />
    {<Outlet />}
    <Footer />
  </React.Fragment>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
