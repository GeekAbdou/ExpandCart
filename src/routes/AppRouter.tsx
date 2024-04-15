import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "@/templates/MainLayout/MainLayout";
// pages
import Home from "@/views/Home";
import Categories from "@/views/Categories";
import Products from "@/views/Products";
import AboutUs from "@/views/AboutUs";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Error from "@/views/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
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
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
