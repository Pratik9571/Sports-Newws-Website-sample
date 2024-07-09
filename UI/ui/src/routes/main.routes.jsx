import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import TrendingNews from "../Pages/TrendingNews";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,

        path: "trendingnews",
        element: <TrendingNews />,
      },
    ],
  },
];
export default mainRoutes;
