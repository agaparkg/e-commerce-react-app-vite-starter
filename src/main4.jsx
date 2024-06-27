import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App4.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // errorElement: <div>Page not found!</div>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
