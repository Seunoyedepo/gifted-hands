
let organization = "Gifted Hands";
let city = "Ibadan";
let volunteers = 50;
let acceptingDonations = true;

console.log(typeof organization);
console.log(typeof city);
console.log(typeof volunteers);
console.log(typeof acceptingDonations);

volunteers = 120;
console.log(volunteers);

city = "Lagos";
console.log(city);

let donation1 = 5000;
let donation2 = 3000;

console.log(donation1 + donation2);
console.log(donation1 - donation2);
console.log(donation1 * donation2);
console.log(donation1 / donation2);

console.log(10 % 3);
console.log(20 % 5);

let firstName = "Seun";
let lastName = "Oyedepo";
console.log(firstName + " - " + lastName);

 organization = "Gifted Hands";
 city = "Ibadan";
console.log(organization + " is located in " + city);

console.log(20 > 18);
console.log(15 > 18);
console.log(18 >= 18);
console.log(16 < 18);
console.log(10 === 10);
console.log(10 === "10");

let age = 20;
if (age >= 18){
    console.log("You are eligible to register");
}

let donation = 3000;
if (donation >= 5000){
    console.log("Thank you for your generous donation!");
} else{
    console.log("Thank you for supporting Gifted Hands");
}