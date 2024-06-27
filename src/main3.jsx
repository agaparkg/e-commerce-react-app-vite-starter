import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App3.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products">
        <Route path="" element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
