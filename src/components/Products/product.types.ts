export type ProductType = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    warrantyInformation: string,
    dimensions: ProductDimensionType,
    shippingInformation: string,
    availabilityStatus: string,
    review: ProductReviewType[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: ProductMetaType,
    images: string[]
    quantity: number
}

type ProductDimensionType = {
    width: number,
    height: number,
    depth: number
}

type ProductReviewType = {
    rating: number,
    comment: string,
    date: Date,
    reviewerName: string,
    reviewerEmail: string,
}

type ProductMetaType = {
    createdAt: Date,
    updatedAt: Date,
    barcode: number,
}

export type ProductListType = {
    products: ProductType[],
    total: number,
    skip: number,
    limit: number,
}
