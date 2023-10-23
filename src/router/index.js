import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Age from "../components/AgeForm/Age";
import Login from "../components/Login/Login";
import Start from "../pages/Start";
import SignUp from "../components/SignUp/SignUp";
import Welcome from "../pages/Welcome";
import PopUp from "../pages/PopUp";
import SearchResults from "../pages/SearchResults";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/start",
        element: <Start />,
        children: [
          {
            path: "/start/age",
            element: <Age />,
          },
          {
            path: "/start/login",
            element: <Login />,
          },
          {
            path: "/start/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      { path: "/popup", element: <PopUp /> },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      
    ],
  },
]);
