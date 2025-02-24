let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{     DEFAULT FUNCTION BY JS IN LOOPS TO UNDERSTAND ACTUAL VALUE INDEX , THEY ARE NOT JUSTS PARAMETRS  forEach is a method available on arrays in JavaScript.It executes a provided function once for each array element.
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {                            #understand better
//     if (Object.hasOwnProperty.call(obj, key)) {            
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of a) {
    console.log(value)
}