// function isLeepYear(year){
//     // let leep =
//     if( year % 4 === 0){
//         console.log("leap years")
//     }else{
//         console.log("No leep year")
//     }

// }
// isLeepYear(1924)


function isLeepYear(year){
    if(year % 100  !== 0 && year % 4 === 0){
        return true
    }else if(year % 400 == 0){
        return true
    }
    return false

}

let leep = isLeepYear(2000)
let leep2 = isLeepYear(2001)
let leep3 = isLeepYear(2002) 
console.log(leep, leep2 , leep3)