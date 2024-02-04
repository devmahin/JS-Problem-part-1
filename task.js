// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
// Celsius to Fahrenheit. formula
// (°C × 9/5) + 32 = °F
// Fahrenheit to celsius
// (32°F − 32) × 5/9 = 0°C


// function Celsius (celsius){
//     let Fahrenheit = (celsius * 9 / 5) + 32;
//     return Fahrenheit;
//     // console.log(Fahrenheit)
// }
// let f = Celsius(40);
// console.log(f);


function Celsius(Fahrenheit) {
    let celsius = (59 - 32) * 5 / 9;

    return celsius;
    // console.log(Fahrenheit)
}
let f = Celsius(59);
// console.log(f);












// task 2
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// function arrayFun(arr){
//     let output = [];
//     for(let array of arr){
//         if(array === 5){
//             // console.log(array.)
//             output.push(array)
//             continue;
//         }
//     }
//     return output;

// }

// let numbers = [5,6,11,12,98, 5];
// let outputs = arrayFun(numbers)
// console.log(outputs.length)



// function dobuleArr(arr) {
//     let Count = 0;
//     for (array of arr){
//         // console.log(array)
//         if(array === 5){
//             Count++;
//         }
//     }
//     return Count;
// }

// let numbers = [5, 6, 11, 12, 98, 5];
// // console.log(dobuleArr(numbers))



// // sample-input:

// // numbers = [5,6,11,12,98, 5]

// // find: 25

// // output: 0



// function inputs (arr){
//     let Count = 0;
//     for(let arrray of arr){
//         // console.log(arrray)
//         if(arrray === 25){
//             Count++;
//         }
//     }
//     return Count;
// }

// let num = [5,6,11,12,98, 5];
// // console.log(inputs(num))





// // Write a function to count the number of vowels in a string.
let vowels = "aeiou";
// // let vowels = [a,e,i,o,u];
let strings = "Paragraphs ";

// console.log(strings.length)
function stringVowelCheck(vow, strings){
    let count = 0;
    for (let vowels of vow){
        // console.log(vowels)
        for(let str of strings){
            // console.log(str)
            if(str === vowels){
                count++;
            }
        }
    }
    // console.log(count)
}
stringVowelCheck(vowels, strings.toLowerCase())






// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming


function longestFun(str){
   let longestString = "";
   let longestWord = 0;
    let split = str.split(" ");
    for (let string of split){
        // console.log(string)
        if(string.length > longestWord){
            longestWord = string.length;
            longestString = string;
            // console.log(split)
        }
    }
    return longestString;
}

let str = "I am learning Programming to become a programmer";
// console.log(longestFun(str))









// Task-5:
// Generate a random number between 10 to 20.

// let random =
// console.log(random)

function randomFun(){
    return  Math.floor(Math.random() * 10001) + 40000;      
}
function randomFun2(){
    return  Math.floor(Math.random() * 11) + 20;      
}
// console.log(randomFun())

// console.log(randomFun2())









// function vowelCheckString (str){
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let strings of str){
//         // console.log(str)
//         if(vowels.includes(strings)){
//             count++;
//         }
//     }
//     return count;
// }
// let strings = "Paragraphs ";
// console.log(vowelCheckString(strings))
























// for(var i =0; i<5; i++){
//     setTimeout(function (){
//         console.log(i)
//     }, 100)
// }

let math = Math.floor(-4.333)
console.log(math)