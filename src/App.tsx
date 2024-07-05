import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Layout from "./components/Layouts/Layout";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

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
          element: <ProtectedRoute />,
          children: [
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
        {
          path: "product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/category",
          element: <ProductCategory />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return router;
}

export default App;
