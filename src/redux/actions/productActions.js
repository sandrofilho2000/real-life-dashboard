export const products_delete = (product) =>{
    return {
        type: "SET_PRODUCTS_DELETE",
        product
    }
}

export const product_add = (product) =>{
    return {
        type: "SET_PROD_ADDING",
        product
    }
}

export const product_edit = (product) =>{
    return {
        type: "SET_PROD_EDITING",
        product
    }
}