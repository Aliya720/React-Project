import { useEffect, useState } from "react";
import { ProductType } from "../../components/Products/product.types";
import classes from "./productDetail.module.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import AddToCart from "../../components/Button/AddToCart";

const ProductDetail = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const [mainImage, setMainImage] = useState(currentProduct?.images[0]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  const getProductDetails = async (url: string) => {
    setLoading(true);
    const { data } = await axios.get(url);
    setCurrentProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getProductDetails(`https://dummyjson.com/products/${productId}`);
  }, []);

  useEffect(() => {
    if (currentProduct && currentProduct.images.length > 0) {
      setMainImage(currentProduct.images[0]);
    }
  }, [currentProduct]);

  if (loading && !currentProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className={classes.productWrapper}>
        <div className={classes.Images}>
          <img
            src={mainImage}
            alt="mainImage"
            className={classes.activeImage}
          />
          <div>
            {currentProduct?.images.map((image, idx) => {
              return (
                <img
                  src={image}
                  alt="thumbnail image"
                  className={`${classes.productImage} ${
                    mainImage === image ? classes.thumbnailActive : ""
                  }`}
                  key={idx}
                  onClick={() => {
                    setMainImage(currentProduct.images[idx]);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={classes.productInfo}>
          <p>Brand: {currentProduct?.brand}</p>
          <h1 className={classes.productTitle}>
            {currentProduct?.title}
            <p>RS {currentProduct?.price}</p>
          </h1>
          <div>
            <span>{currentProduct?.availabilityStatus}</span>
            <span> {currentProduct?.stock} </span>
            <p>minimum Order: {currentProduct?.minimumOrderQuantity}</p>
          </div>
          <p className={classes.productDescription}>
            {currentProduct?.description}
          </p>
        </div>
        <div className={classes.otherDetails}>
          <div className={classes.btn}>
            <AddToCart currentProduct={currentProduct} />
          </div>
          <p>{currentProduct?.warrantyInformation}</p>
          <p>{currentProduct?.returnPolicy}</p>
          <p>{currentProduct?.shippingInformation}</p>
          <p className={classes.productRatings}>
            <Rating initialValue={currentProduct?.rating} readonly />
            {currentProduct?.rating}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
