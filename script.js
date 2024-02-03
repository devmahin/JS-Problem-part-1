// const person = {
//     name: 'John',
//     age: 30,
// };


// let arry = ["mahin", "antor"];
// function detailes(person) {
//     if(typeof person === "object" && !Array.isArray(person)){
//         console.log("valid object") 
//     }else{
//         // console.log("Not valid")
//         return "Not valid"
//     }
//     return `You are ${person?.name}.his ${person?.age} years old.`
// }

// console.log(detailes(arry))







/////INCH TO Feet convat
// function convat(inc){
//     let inch = inc / 12;
//     return inch

// }
// let inc = 65;
// let feet = convat(inc)
// console.log(feet.toFixed(2))




// feet inch 
// let inch = 75;
// function inc(inc) {
//     let feet = inc / 12;
//     let feet2 = parseInt(feet)
//     let incs = inc % 12;
//     console.log(incs)
//     return `Mahin ${feet2} feet ${incs} inc`
// }
// console.log(inc(inch))





// miles to kilometer
function milesKilometer(meles){
    let kilo = meles * 1.60934;
    return kilo;
}
let kilometer = milesKilometer(8)
// console.log(kilometer)



// kilometers to mile
function kilometers(k){
    let mile = k * 0.62
    return mile;

}
let kilo = kilometers (5);
console.log(kilo)