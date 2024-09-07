// Task 1: Calculate the Tip
let bill = 100;
if (50 <= bill <= 300)
    var tip = (bill * .15);
else 
    var tip = (bill *.2);

// Task 2: Output Details
console.log('The bill was $' + bill + ', the tip was $' + tip + ', and the total value is $' + (bill+tip)); 

// Task 3: Create a Function
function calculateTip(bill){
    if (50 <= bill <= 300)
        var tip = (bill * .15);
    else 
        var tip = (bill *.2);
}
console.log('The value to tip is $' + calculateTip(100)); // Return "The value of the tip is $15"
