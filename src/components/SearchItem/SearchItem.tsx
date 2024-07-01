import { useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import classes from "./searchItem.module.css";
import { useCart } from "../../pages/Cart/CartContext";
import { ProductType } from "../Products/product.types";

const SearchItem = () => {
  const [search, setSearch] = useState("");

  const productState = useCart();
  const SearchedItem = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
    console.log(search);
    const filterProduct = productState?.products.filter((product) => {
      return search.toLowerCase() === ""
        ? product
        : product.title.toLowerCase().includes(search);
    });
    productState?.setFilteredProducts(filterProduct as ProductType[]);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className={classes.searchProduct}
        onChange={SearchedItem}
      />{" "}
      <SearchIcon />
      <div
        className={`${classes.productTitles} ${
          search.length > 0 ? classes.show : ""
        }`}
      >
        {productState?.filteredProducts.map((product) => {
          return (
            <div key={product.id}>
              <p className={classes.title}>{product.title}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchItem;
