'use strict';

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];


// for(let i = 0; i < bill.length; i++){
    
//     const tip = bill[i] <= 300 && bill[i] >= 50 ? 0.15*bill[i] : 0.20*bill[i];
//     tips.push(tip);
//     const total = bill[i] + tips[i];
//     totals.push(total);
    
// }


// console.log(tips);
// console.log(totals);


const arr = [102, 52, 78, 603];


function calcAverage(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = arr[i] + total;  
    
    }  
    return total / arr.length;
}

console.log(calcAverage([1,55,3]));