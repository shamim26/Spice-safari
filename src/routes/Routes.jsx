import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5180/chef/"),
      },
      {
        path: "chef-recipe/:id",
        element: (
          <PrivateRoutes>
            <ChefRecipe></ChefRecipe>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5180/chef/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:'blogs',
        element:<Blog></Blog>

      }
    ],
  },
]);

export default router;
