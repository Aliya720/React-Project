import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./pages/Cart/CartContext.tsx";
import { AuthenticationProvider } from "./context/AuthenticationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
