// Task 1: Calculate the Tip
let bill = 100;
if (50 <= bill <= 300)
    var tip = (bill * .15);
else 
    var tip = (bill *.2);

console.log('The bill was $' + bill + ', the tip was $' + tip + ', and the total value is $' + (bill+tip)); 