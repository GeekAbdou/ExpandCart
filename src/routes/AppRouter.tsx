import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";

// layouts
import MainLayout from "@/templates/MainLayout/MainLayout";
// pages
const AboutUs = React.lazy(() => import("@/views/AboutUs"));
const Categories = React.lazy(() => import("@/views/Categories"));
const Error = React.lazy(() => import("@/views/Error"));
const Home = React.lazy(() => import("@/views/Home"));
const Login = React.lazy(() => import("@/views/Login"));
const Products = React.lazy(() => import("@/views/Products"));
const Register = React.lazy(() => import("@/views/Register"));
const Cart = React.lazy(() => import("@/views/Cart"));
const Wishlist = React.lazy(() => import("@/views/Wishlist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Wishlist />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
