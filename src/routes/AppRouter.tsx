import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { PageSpinner } from "@/components/shared";
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
          <Suspense fallback={<PageSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <Suspense fallback={<PageSpinner />}>
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
          <Suspense fallback={<PageSpinner />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<PageSpinner />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<PageSpinner />}>
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
