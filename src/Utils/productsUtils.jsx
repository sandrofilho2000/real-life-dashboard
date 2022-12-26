export const generateId = (maxLimit = 10000) => {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99
    console.log(rand)
    return rand ;
}