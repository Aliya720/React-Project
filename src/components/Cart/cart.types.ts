
import { ProductType } from "../Products/product.types"

export type ReducerActionType = {
    type: string,
    payload: unknown
}

export type CartType = {
    product: ProductType,
    addToCart: ProductType[]

}
