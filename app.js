// //Question no 1...!!!
// let num = 10;

// document.write(num += 20 , "<br>");

// // EnD

//***************************************

// //Question no 2...!!!
// let a = 10;

// document.write(a += 20, "<br>"); // Addition
// document.write(a -= 20, "<br>"); // Subtraction
// document.write(a *= 20, "<br>"); // Multiplication
// document.write(a /= 20, "<br>"); // Division
// document.write(a %= 20, "<br>"); // Modulus

// // EnD 

//********************************** 

// //Question no 3...!!!
// a. Declare a variable
// let mynumber;

// // b. Show the value of variable in your browser
// document.write("Value after variable declaration is: " + mynumber + "<br>");

// // c. Initialize the variable with some number
// mynumber = 5;

// // d. Show the value of variable in your browser
// document.write("Initial value: " + mynumber + "<br>");

// // e. Increment the variable
// mynumber++;

// // f. Show the value of variable in your browser
// document.write("Value after increment is: " + mynumber + "<br>");

// // g. Add 7 to the variable
// mynumber += 7;

// // h. Show the value of variable in your browser
// document.write("Value after addition is: " + mynumber + "<br>");

// // i. Decrement the variable
// mynumber--;

// // j. Show the value of variable in your browser
// document.write("Value after decrement is: " + mynumber + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3
// let remainder = mynumber % 3;

// // l. Output the remainder
// document.write("The remainder is: " + remainder, "<br>");

// // EnD

//********************************** 

// //Question no 4...!!!
// Store the ticket price in a variable
// let ticketPrice = 600; // price of one ticket in PKR

// // Calculate the cost of buying 5 tickets
// let numberOfTickets = 5;
// let totalCost = ticketPrice * numberOfTickets;

// // Output the result
// document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR.", "<br>");

// // EnD

//********************************** 

// //Question no 5...!!!
// let table = 7; // YOu can change this number to generate a table for a different number

// // Display the Multiplication table
// for (let i = 1; i <= 10; i++) {
//     let result = table * i;
//     document.write(table + "  x  " + i + "  =  " + result + "<br>");
// }

// // EnD 

//********************************** 

// //Question no 6...!!!
// // a. Store a Celsius temperature into a variable
// let celsius = 25; // Example temperature in Celsius

// // b. Convert it to Fahrenheit
// let fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// // c. Now store a Fahrenheit temperature into a variable
// fahrenheit = 77; // Example temperature in Fahrenheit

// // d. Convert it to Celsius
// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsius + "°C<br>");

// EnD

//********************************** 

// // Question no 7...!!!
// a. Price of item 1
// let priceItem1 = 150; // Example price for item 1 in PKR

// // b. Price of item 2
// let priceItem2 = 200; // Example price for item 2 in PKR

// // c. Ordered quantity of item 1
// let quantityItem1 = 2; // Quantity of item 1 ordered

// // d. Ordered quantity of item 2
// let quantityItem2 = 3; // Quantity of item 2 ordered

// // e. Shipping charges
// let shippingCharges = 50; // Shipping charges in PKR

// // Calculate total cost
// let totalCostItem2 = priceItem2 * quantityItem2;
// let totalCostItem1 = priceItem1 * quantityItem1;
// let totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

// // Output the checkout details
// document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
// document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
// document.write("Total Cost for Item 1: " + totalCostItem1 + " PKR<br><br>");

// document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
// document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
// document.write("Total Cost for Item 2: " + totalCostItem2 + " PKR<br><br>");

// document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
// document.write("Total Checkout Cost: " + totalCost + " PKR<br><br>");

// EnD

//********************************** 

//Question no 8...!!!
//Store total marks and marks obtained
// let totalMarks = 500; // Example total marks
// let marksObtained = 385; // Example marks obtained

// // Compute the percentage
// let percentage = (marksObtained / totalMarks) * 100;

// // Show the result in the browser
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%" , "<br>");

// EnD

//************************************

//Question no 9...!!!
// Given values
// let usd = 10; // US dollars
// let sar = 25; // Saudi Riyals

// // Exchange rates
// let usdToPkr = 104.80; // 1 US Dollar to PKR
// let sarToPkr = 28; // 1 Saudi Riyal to PKR

// // Convert to PKR using a single expression
// let totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

// // Output the result
// document.write("Total in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR<br>");

// EnD

//************************************

//Question no 10...!!!
// Initialize a variable with some number
// let initialNumber = 8; // You can change this number

// // Perform arithmetic operations in a single expression
// let result = ((initialNumber + 5) * 10) / 2;

// // Output the result
// document.write("The result of the operations is: " + result , "<br>");

// EnD

//************************************

//Question no 11...!!!
//a. Store the current year in a variable
// let currentYear = 2024; // Change this to the current year

// // b. Store their birth year in a variable
// let birthYear = 2007; // Change this to the person's birth year

// // c. Calculate their possible ages
// let age1 = currentYear - birthYear; // Age if they have had their birthday this year
// let age2 = age1 - 1; // Age if they have not had their birthday yet

// // Output the result
// document.write("They are either " + age2 + " or " + age1 + " years old. <br>");

// EnD

//************************************

// //Question no 12...!!!
//  // a. Store a radius into a variable
//  let radius = 5; // You can change this value to calculate for a different radius

//  // b. Calculate the circumference
//  let part = 3.142;
//  let circumference = 2 * part * radius;

//  // Output the circumference
//  document.write("The circumference is " + circumference.toFixed(2) + "<br>");

//  // Calculate the area
//  let area = part * (radius ** 2);

//  // Output the area
//  document.write("The area is " + area.toFixed(2) , "<br>");

// EnD

//************************************

//Question no 13...!!!
// a. Store your favorite biscuit into a variable
// let favoritebiscuit = "Rite"; // Example biscuit

// // b. Store your current age into a variable
// let currentAge = 15; // Example current age

// // c. Store a maximum age into a variable
// let maxAge = 65; // Example maximum age

// // d. Store an estimated amount per day (as a number)
// let amountPerDay = 3; // Example amount per day

// // e. Calculate total amount needed for the rest of your life
// let yearsLeft = maxAge - currentAge; // Calculate years left
// let totalAmount = yearsLeft * 1 * amountPerDay; // Total amount needed

// // Output the result to the screen
// document.write("You will need " + totalAmount + " " + favoritebiscuit + " to last you until the ripe old age of " + maxAge + "." , "<br>");

// EnD

//********************************************

