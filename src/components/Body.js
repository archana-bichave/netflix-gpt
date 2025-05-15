import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
        <Header />
      <RouterProvider router={routes}></RouterProvider>
      <Footer />
    </div>
  );
};

export default Body;
