import MainLayout from "../Layout/MainLayout";
import Home from "../Landing Pages/Home";
import EuroPage from "../Pages/EuroPage";
import TrendingPage from "../Pages/TrendingPage";
import ClubPage from "../Pages/ClubPage";
import SignUp from "../Landing Pages/SignUp";
import AboutPage from "../Pages/AboutPage";
import TrendingNews from "../Landing Pages/TrendingNews";
const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <div>
            <Home />
            <EuroPage />
            <TrendingNews />
            <ClubPage />
            <SignUp />
          </div>
        ),
      },
      {
        path: "EuroPage",
        element: <EuroPage />,
      },
      {
        path: "Trending News",
        element: <TrendingPage />,
      },
      {
        path: "ClubPage",
        element: <ClubPage />,
      },
      {
        path: "About Us",
        element: <AboutPage />,
      },
    ],
  },
];
export default mainRoutes;
