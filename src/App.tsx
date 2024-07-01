import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Layout from "./components/Layouts/Layout";
import ProductCategory from "./components/ProductCategory/ProductCategory";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/category",
          element: <ProductCategory />,
        },
      ],
    },
  ]);

  return router;
}

export default App;
