import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { useRoutes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetails/ProductDetail";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "product/:productId",
      element: <ProductDetail />,
    },
  ]);

  return router;
}

export default App;
