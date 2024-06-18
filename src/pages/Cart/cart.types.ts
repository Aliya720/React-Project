
import { ProductType } from "../../components/Products/product.types"


export type CartType = {
    cartItems: ProductType[],
    setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>,
    products: ProductType[],
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
    addToCart: (item: ProductType) => void,
    removeFromCart: (item: ProductType) => void,
    getCartTotal: () => number,
    clearCart: () => void,
}
