 organization = "Gifted Hands";
 city = "Ibadan";
 founder = "Seun Oyedepo";
 volunteer = 120;

console.log(organization);
console.log(city);
console.log(founder);
console.log(volunteer);

age = 17;
if(age >=18){
    console.log("You are eligible to volunteer");
}else{
    console.log("You are not eligible to volunteer");
}

donation = 4000;
if(donation >= 5000){
    console.log("Thanks for your generous support");
} else{
    console.log("Thanks for supporting Gifted Hands");
}

let score = 59;
if(score >= 60){
    console.log("Pass");
}else{
    console.log("Fail");
}

donation = 7000;

if (donation >= 7000){
    console.log ("Platinum Donor!");
} else if (donation >= 5000){
    console.log("Gold Donor!");
} else {
    console.log("Thank you for supporting Gifted Hands");
}

score = 49;

if (score >=70) {
    console.log("A");
} else if (score >= 60){
    console.log("B");
} else if (score >= 50){
    console.log("C");
} else {
    console.log("Fail");
}

age = 17;
let completedForm = false;

if (age >=18 && completedForm){
    console.log("Eligible to volunteer");
} else{
    console.log("Not eligible to volunteer");
}

let firstAid = true;
let teaching = false;

if (firstAid || teaching){
    console.log("Volunteer Accepted");
} else{
    console.log("Volunteer Rejected");
}

let registrationClosed = true;

if (!registrationClosed){
    console.log("Registration is Open");
} else {
    console.log("Registration is Closed")
}