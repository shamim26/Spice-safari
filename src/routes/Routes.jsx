import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://spice-safari-server.vercel.app/chef"),
      },
      {
        path: "chef-recipe/:id",
        element: (
          <PrivateRoutes>
            <ChefRecipe></ChefRecipe>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://spice-safari-server.vercel.app/chef/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
