let array1 = ["apple", "banana", "orange", "grape", "watermelon", "kiwi", "apple", "banana","orange"];
let array2 = [1,2,3,4,5,6,7,8,1,9,2,3,5,6,7]

function arrayDublicate (arr){
    let newArray = [];
    for(let array of arr){
        // console.log(array)
        if(newArray.includes(array) === false){
            newArray.push(array)
        }
    }
    return newArray;
}
let arr1 = arrayDublicate(array1)
console.log(arr1)
let arr2 = arrayDublicate(array2)
console.log(arr2)