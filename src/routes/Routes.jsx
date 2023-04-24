import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
// import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => axios.get("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
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
