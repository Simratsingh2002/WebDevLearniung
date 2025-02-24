let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{   //better way to do this is using map function,its gonna do same thing as above
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))        //another imp function

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))    //reduce function does is vo kalle kalle array ke element pe lgega, then value return krega total, here pella 1+2 ,fer jo aya unu agle 3 nal krega , repeating same thing till end.

// A WAY TO FIND FACTORIAL 
function factorial(number){
    let x=Array.from(Array(number+1).keys())    //easy way to generate an array,.keys() ko hi use krke array bnade,// Generate an array from 0 to `number`

    let c= x.slice(1,).reduce((a,b)=>a*b)
    return c
}
console.log(factorial(6))