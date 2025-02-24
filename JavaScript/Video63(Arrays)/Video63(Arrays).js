let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4
// ARRAYS ARE MUTABLE,UNLIKE STRINGS , IF ARRAY IS UPDATED IT WILL BE CHANGED IF UNTRY TO PRINT IT AGAIN
// ARRAY IS A TYPE OF OBJECT DATA TYPE
arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))   //USED TO REPLACE , IN ARRAY ELEMETS
arr.pop()
arr.push(100)
arr.push("xyz")
arr.shift()
arr.unshift(5)
delete a[4]
// arr.concat() 
arr.slice(1,3)
arr.reverse()
Array.from("simrat")   //converts simrat to array, or can convert anything to array
 
// let numbers = [1, 2, 3, 4, 5]      
// numbers.splice(1, 2)          from position 1 delete 2 elements,it will return removed elements and modify array
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333)    from position 1 delete 3 elements and add 222,333
// (4) [1, 222, 333, 5]