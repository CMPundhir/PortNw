export const splitString = (string ,charLength) => {
    let myArray = string.match(/.{1,4}/g);
    // const arrLength = myArray.length;
return myArray;
    // for (let i=0; i<arrLength;i++){
    //     return myArray[i];
    // }
}

export const formatCoupon = (coupon) => {
    if(!coupon) return "";
    const a = coupon.split(/(.{4})/).reduce((x, y) => x+" "+y)
    return a;
}