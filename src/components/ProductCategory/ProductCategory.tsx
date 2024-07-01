import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsApi } from "../../api/products.endpoints";
import { useCart } from "../../pages/Cart/CartContext";
import classes from "./productCategory.module.css";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";
import Checkbox from "../Checkbox/Checkbox";
import { ProductType } from "../Products/product.types";

const ProductCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const productState = useCart();

  const getCategoryList = async (url: string) => {
    const { data } = await axios.get(url);
    setCategoryList(data);
  };

  useEffect(() => {
    getCategoryList(ProductsApi.CategoryList);
  }, []);

  const IsChecked = () => {
    setShowCheckbox(!showCheckbox);
  };

  const handleFilterSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(selectedCategory);
    const filterProduct =
      selectedCategory.length > 0
        ? productState?.products.filter((product) =>
            selectedCategory?.includes(product.category)
          )
        : productState?.products;
    console.log("Filtered Products:", filterProduct);
    productState?.setFilteredProducts(filterProduct as ProductType[]);
  };

  return (
    <>
      <div className={classes.dropdown}>
        <label className={classes.dropdownLabel} onClick={IsChecked}>
          Category {}
          <ChevronDownIcon />
        </label>
        <div
          className={`${classes.dropdownList} ${
            showCheckbox ? classes.show : ""
          }`}
        >
          <Checkbox
            onSubmit={handleFilterSubmit}
            options={categoryList}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
