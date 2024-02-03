function avg (arr){
    let odd = [];
    for(let i=0; i<arr.length; i++){
        let a = arr[i];
        if(a % 2 === 1){
            // console.log(a)
            odd.push(a)
        }
    }
    console.log(odd)
    let sum = 0;
    for(let oddNum of odd){
        sum = sum + oddNum
    }
    let len = odd.length;
    let avg = sum / len;
    return avg;

}
console.log(
    avg([12,2,4,53,71,35,35.3,99])


)