import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { PageSpinner } from "@/components/shared";
// layouts
import MainLayout from "@/templates/MainLayout/MainLayout";
// components
import { LottieHandler, PageSuspenseFallback } from "@/components/shared/loadingFallbacks";
// pages
import Error from "@/views/Error";
const AboutUs = React.lazy(() => import("@/views/AboutUs"));
const Categories = React.lazy(() => import("@/views/Categories"));
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
          <Suspense fallback={
            <div style={{ marginTop: "10%" }}>
              <LottieHandler type="loading" message="Loading please wait..." />
            </div>
          }>
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
          <PageSuspenseFallback>
            <AboutUs />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspenseFallback>
            <Wishlist />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
