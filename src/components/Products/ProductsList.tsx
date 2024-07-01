import axios from "axios";
import { useEffect, useState } from "react";
import { ProductListType } from "./product.types";
import classes from "./productsList.module.css";
import { ProductsApi } from "../../api/products.endpoints";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";
import { useCart } from "../../pages/Cart/CartContext";
import AddToCart from "../Button/AddToCart";

const ProductsList = () => {
  const [productList, setProductList] = useState<ProductListType>();
  const [error, setError] = useState("");

  const cartState = useCart();

  const getProductList = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      setProductList(data);
      cartState?.setProducts(data.products);
      cartState?.setFilteredProducts(data.products);
      return data;
    } catch (error) {
      let errorMessage = "Unknown Error";
      if (error instanceof Error) errorMessage = error.message;
      setError(errorMessage);
    }
  };

  useEffect(() => {
    getProductList(ProductsApi.getProductList);
  }, []);
  return (
    <>
      <h1 className={classes.mainTitle}>Items You Might Like</h1>
      <section className={classes.productWrapper}>
        {error !== "" && <h1>{error}</h1>}
        {cartState?.filteredProducts?.map((product, idx) => {
          return (
            <div key={idx} className={classes.product}>
              <img
                className={classes.productImage}
                src={product.images[0]}
                alt="product-image"
              />
              <NavLink
                to={`/product/${product.id}`}
                className={classes.navLink}
              >
                <h1 className={classes.productTitles}>
                  {product.title}
                  <p className={classes.productPrice}>
                    <span className={classes.rupeeFont}>&#8377;</span>
                    {product.price}
                  </p>
                </h1>
              </NavLink>
              <p className={classes.productDescription}>
                {product.description.slice(0, 30)}..
              </p>
              <div className={classes.productRating}>
                <Rating
                  SVGclassName={classes.ratingStar}
                  initialValue={product.rating}
                  readonly
                />
                <p className={classes.ratingNumber}>{product.rating}</p>
              </div>
              <AddToCart currentProduct={product} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductsList;
