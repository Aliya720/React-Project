import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { ProductListType } from "./product.types";
import classes from "./products.module.css";
import { ProductsApi } from "../../api/products.endpoints";
import { Rating } from "react-simple-star-rating";
import { CartType } from "../Cart/cart.types";
// import { CartProvider } from "../Cart/CartContext";
import {
  cartReducerFn,
  cartInitialState,
  CartContext,
} from "../Cart/CartContext";
import { NavLink } from "react-router-dom";

const ProductsList = () => {
  const [productList, setProductList] = useState<ProductListType>();
  const [error, setError] = useState("");
  const [reducerCartState, reducerCartDispatch] = useReducer(
    cartReducerFn,
    cartInitialState
  );

  const getProduct = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      setProductList(data);
      return data;
    } catch (error) {
      let errorMessage = "Unknown Error";
      if (error instanceof Error) errorMessage = error.message;
      setError(errorMessage);
    }
  };

  useEffect(() => {
    reducerCartDispatch({
      type: "addToCart",
      payload: getProduct(ProductsApi.getProduct),
    });

    // console.log(reducerCartState);
  }, []);

  return (
    <>
      {" "}
      <CartContext.Provider value={reducerCartState}>
        <h1 className={classes.mainTitle}>Items You Might Like</h1>
        <section className={classes.productWrapper}>
          {error !== "" && <h1>{error}</h1>}
          {productList?.products.map((product, idx) => {
            return (
              <div key={idx} className={classes.product}>
                <img
                  className={classes.productImage}
                  src={product.images[0]}
                  alt="product-image"
                />
                <h1 className={classes.productTitles}>
                  {product.title}
                  <p className={classes.productPrice}>
                    <span className={classes.rupeeFont}>&#8377;</span>
                    {product.price}
                  </p>
                </h1>

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
                <button
                  className={classes.productAddToCartBtn}
                  onClick={() =>
                    reducerCartDispatch({
                      type: "addToCart",
                      payload: getProduct(ProductsApi.getProduct),
                    })
                  }
                >
                  <NavLink to="/cart" className={classes.navLink}>
                    Add to Cart
                  </NavLink>
                </button>
              </div>
            );
          })}
        </section>
      </CartContext.Provider>
    </>
  );
};

export default ProductsList;
