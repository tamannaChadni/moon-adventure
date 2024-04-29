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
// import PrivateRoute from "./component/Route/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";


import AllSpots from "./component/AllSpots/AllSpots";
import AddSpots from "./component/AddSpots/AddSpots";
import MyList from "./component/MyList/MyList";
import UpdateSpot from "./component/UpdateSpot/UpdateSpot";
import Country from "./component/Country/Country";
import SpotDetails from "./component/SpotDetails/SpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          
          fetch(
            "http://localhost:5000/spot"
          ),
      },
      {
        path: "/spot/:id",
        element: <SpotDetails></SpotDetails>,
        loader: () =>
          fetch(
            "http://localhost:5000/spot"
          ),
      },
      {
        path:"/",
        element:<Country></Country>,
        loader: () =>
           fetch(
            "http://localhost:5000/country"
          ),
      },
      {
        path:"/all-spots",
        element:<AllSpots></AllSpots>,
      },
      {
        path:"/add-spots",
        element:<AddSpots></AddSpots>,
      },
      {
        path:"/update-spots//:id",
        element:<UpdateSpot></UpdateSpot>,
        loader:({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path:"/my-list",
        element:<MyList></MyList>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
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
