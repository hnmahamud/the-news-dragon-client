import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import axios from "axios";
import LoginRegLayout from "../layouts/LoginRegLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegLayout></LoginRegLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/8"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/category",
    element: <Root></Root>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: async ({ params }) =>
          axios.get(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
