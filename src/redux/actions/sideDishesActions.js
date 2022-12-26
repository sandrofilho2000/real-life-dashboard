export const sdishes_update = (updatedSdishArray) =>{
    return{
        type: "UPDATE_SDISHES",
        updatedSdishArray
    }
}
export const sdishes_add = (sdCategory) =>{
    return{
        type: "SET_SDISHES_ADDING",
        sdCategory
    }
}
export const sdishes_edit = (sdCategory) =>{
    return{
        type: "SET_SDISHES_EDITING",
        sdCategory
    }
}