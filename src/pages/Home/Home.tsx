import { Navbar } from "../../components/Navbar/Navbar";
import ProductsList from "../../components/Products/Products";
// import { CartProvider } from "../../components/Cart/CartContext";

const Home = () => {
  return (
    <>
      {/* <CartProvider> */}
      <Navbar />
      <ProductsList />
      {/* </CartProvider> */}
    </>
  );
};

export default Home;
