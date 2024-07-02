import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./Pages/Home";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./component/Route/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";

import AllSpots from "./component/AllSpots/AllSpots";
import AddSpots from "./component/AddSpots/AddSpots";
import MyList from "./component/MyList/MyList";
import UpdateSpot from "./component/UpdateSpot/UpdateSpot";

import SpotDetails from "./component/SpotDetails/SpotDetails";
import SeletedCountry from "./component/SeletedCountry/SeletedCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://moon-adventure-ltd-server.vercel.app/spots"),
      },
      {
        path: "/spots/:_id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://moon-adventure-ltd-server.vercel.app/spots/${params._id}`),
      },

      {
        path: "/all-spots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch("https://moon-adventure-ltd-server.vercel.app/spots"),
      },
      {
        path: "/add-spots",
        element: <AddSpots></AddSpots>,
      },
      {
        path: "/update-spots/:_id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://moon-adventure-ltd-server.vercel.app/spots/${params._id}`),
      },

      {
        path: "/selected-country/:country_name",
        element: (
          <PrivateRoute>
            <SeletedCountry></SeletedCountry>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://moon-adventure-ltd-server.vercel.app/spots/${params.country_name}`),
      },
      // {
      //   path: "/selected-country/",
      //   element: (
      //     <PrivateRoute>
      //       <SeletedCountry></SeletedCountry>
      //     </PrivateRoute>
      //   ),
      //   // loader: ({ params }) =>
      //   //   fetch(`https://moon-adventure-ltd-server.vercel.app/spots/${params.country_name}`),
      // },

      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
        loader: () => fetch("https://moon-adventure-ltd-server.vercel.app/spots"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    {/* <App /> */}
  </React.StrictMode>
);
