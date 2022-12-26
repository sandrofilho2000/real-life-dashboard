export const categories_update = (updatedProductsArray) =>{
    return {
        type: "UPDATE_CATEGORIES",
        updatedProductsArray
    }
}

export const category_active = (active) => {
    return {
        type: "SET_CATEGORY_ACTIVE",
        active
    }
}


export const category_edit = (category) =>{
    return {
        type: "CATEGORY_EDIT",
        category
    }
}
