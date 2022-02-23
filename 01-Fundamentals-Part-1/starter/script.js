let bill = 275;

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;


console.log(`The bill is ${bill}, The tip is ${tip}%, so the total is ${bill+tip}`);