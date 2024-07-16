import MainLayout from "../Layout/MainLayout";
import Home from "../LandingPages/Home";
import EuroPage from "../Pages/EuroPage";
import TrendingPage from "../Pages/TrendingPage";
import ClubPage from "../Pages/ClubPage";
import SignUp from "../LandingPages/SignUp";
import AboutPage from "../Pages/AboutPage";
import TrendingNews from "../LandingPages/TrendingNews";
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
