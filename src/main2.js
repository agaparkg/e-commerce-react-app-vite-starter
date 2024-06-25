import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="" element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>404 page not found.</div>} />
    </>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//         // errorElement: <div>Page not found!</div>,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/products",
//         children: [
//           {
//             path: "",
//             element: <Products />,
//           },
//           {
//             path: ":id",
//             element: <ProductDetails />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
