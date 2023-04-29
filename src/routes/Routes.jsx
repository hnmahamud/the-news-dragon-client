import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import axios from "axios";
import LoginRegLayout from "../layouts/LoginRegLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegLayout></LoginRegLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: async ({ params }) =>
          axios.get(
            `https://the-news-dragon-server-hnmahamud.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(
            `https://the-news-dragon-server-hnmahamud.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
