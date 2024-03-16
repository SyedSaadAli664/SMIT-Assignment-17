// Q1: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var inputChar = prompt("Enter a character: ");
// var result = inputChar.charCodeAt();


// if(!isNaN(inputChar)){
//     console.log( inputChar + " is a number!");
// }else if(result >= 65 && result <= 90){
//     console.log( inputChar + " is an uppercase letter!");
// }else if(result >= 97 && result <= 122){
//     console.log(inputChar + " is a lowercase letter!");
// }

// Q2: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var num1 = +prompt("Enter Your First Number : ")
// var num2 = +prompt("Enter Your Second Number : ")

// if(isNaN(num1)){
//     console.log("Your input not a number!")
// }else if(isNaN(num2)){
//     console.log("Your input not a number!")
// }
// else if(num1 > num2){
//     console.log(num1 + " is greater than " + num2)
// }else if(num1 < num2){
//     console.log(num2 + " is greater than " + num1)
// }else if(num1 = num2){
//     console.log("Your Numbers are Equal to one another.")
// }

// Q3: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var input = +prompt("Enter a number:");

// if (input > 0) {
//     console.log("The number entered is positive.");
// } else if (input < 0) {
//     console.log("The number entered is negative.");
// } else {
//     console.log("The number entered is zero.");
// }

// Q4: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var letter = prompt("Please enter an Alphabet");
// var result = letter.charCodeAt();


// if(!isNaN(letter)){
//  console.log( letter + " is a number, not a vowel");
// }else if(result == 65 || result == 97 || result == 69 || result == 101 || result == 73 || result == 105 || result == 79 || result == 111 || result == 85 || result == 117){
//     console.log(letter + " is a vowel");
// }else{
//     console.log(letter + " is not a vowel");
// }

// Q5: Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

// var pass = prompt("Please enter a password");
// var rePass = prompt("Please re-enter your password.");

// if( pass == rePass ){
//     console.log("Password saved. This is your password --> " + rePass);
// } else {
//     console.log("Password didn't match, try again. Press F5")
// }

// Q6: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = prompt("Please enter what hour it is, example: 12");

// if( hour < 12){
//     console.log("Good Morning dear!");
// }
// else if( hour >= 12 ){
//     console.log("Good Afternoon dear!");
// }

// Q7: Write a program that takes time as input from user in 24 hours clock format
// exapmle like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var hour = +prompt("Please enter hour: example 1200");

// if( hour >= 0 && hour <= 59 ){
//     console.log("It is 12AM");
// }

// else if( hour >= 100 && hour <= 159 ){
//     console.log("It is 1AM");
// }

// else if( hour >= 200 && hour <= 259 ){
//     console.log("It is 2AM");
// }

// else if( hour >= 300 && hour <= 359 ){
//     console.log("It is 3AM");
// }

// else if( hour >= 400 && hour <= 459 ){
//     console.log("It is 4AM");
// }

// else if( hour >= 500 && hour <= 559 ){
//     console.log("It is 5AM");
// }

// else if( hour >= 600 && hour <= 659 ){
//     console.log("It is 6AM");
// }

// else if( hour >= 700 && hour <= 759 ){
//     console.log("It is 7AM");
// }

// else if( hour >= 800 && hour <= 859 ){
//     console.log("It is 8AM");
// }

// else if( hour >= 900 && hour <= 959 ){
//     console.log("It is 9AM");
// }

// else if( hour >= 1000 && hour <= 1059 ){
//     console.log("It is 10AM");
// }

// else if( hour >= 1100 && hour <= 1159 ){
//     console.log("It is 11AM");
// }

// else if( hour >= 1200 && hour <= 1259 ){
//     console.log("It is 12PM");
// }

// else if( hour >= 1300 && hour <= 1359 ){
//     console.log("It is 1PM");
// }

// else if( hour >= 1400 && hour <= 1459 ){
//     console.log("It is 2PM");
// }

// else if( hour >= 1500 && hour <= 1559 ){
//     console.log("It is 3PM");
// }

// else if( hour >= 1600 && hour <= 1659 ){
//     console.log("It is 4PM");
// }

// else if( hour >= 1700 && hour <= 1759 ){
//     console.log("It is 5PM");
// }

// else if( hour >= 1800 && hour <= 1859 ){
//     console.log("It is 6PM");
// }

// else if( hour >= 1900 && hour <= 1959 ){
//     console.log("It is 7PM");
// }

// else if( hour >= 2000 && hour <= 2059 ){
//     console.log("It is 8PM");
// }

// else if( hour >= 2100 && hour <= 2159 ){
//     console.log("It is 9PM");
// }

// else if( hour >= 2200 && hour <= 2259 ){
//     console.log("It is 10PM");
// }

// else if( hour >= 2300 && hour <= 2359 ){
//     console.log("It is 11PM");
// }

// else{
//     console.log("Invalid time. write like this: 02:43 --> 0243");
// }
