console.log("Javascript is Running");
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

// LEARNING LOOPS
for (let i = 1; i <= 5; i++){
    console.log(i);
}

for(let a = 1; a<=10; a++){
    console.log("Volunteer " + a + " Registered");
}

// LOOPS COUNTIMG BACKWARDS

for(let i = 5; i >= 1; i--){
    console.log("Event starts in " + i + "sec");
}

console.log("The event has started !");

// NESTED LOOPS

for (let event = 1; event <= 3; event++){
    console.log("Event" + event);

    for(let volunteer = 1; volunteer <=2; volunteer++){
        console.log("volunteer" + volunteer);
    }
}

for (let day = 1; day <= 3; day++){
    console.log("day" + " " + day);

    for(let task = 1; task <= 2; task++){
        console.log("Task" + " " + task)
    }
}
// LEARNING ARRAYS
 events =["Food Drive",
     "Medical Outreach",
      "Charity Concert",
      "Youth Seminar"
    ];
console.log(events.length);

let volunteerss =["Seun", "David", "Grace"];
donation = [5000, 10000, 7000];
console.log(volunteerss[0]);
console.log(donation[2]);

let programs = [
    "Education Support",
    "Medical Outreach",
    "Youth Empowerment",
    "Food Relief"
];
console.log(programs.length)

//THE COMBINATIONS OF ARRAYS AND LOOP
let volunteers1 = ["Seun Oyedepo", "David Ubani", "Grace Mfon"];
for (let i = 0; i < volunteers1.length; i++){
    console.log(volunteers1[i]);
}
console.log(volunteers1.length);

let programs1 = ["Education Support1", "Medical Outreach1", "Food Relief1"];
for (let a = 0; a < programs1.length; a++){
    console.log(programs1[a]);
}

let programs3 = ["Food Drive 3", "Medical Outreach 3", "Charity Concert 3", "Youth Seminar 3"];
for (let p = 0; p < programs3.length; p++){
    console.log(programs3[p]);
}

let events2=[
    "Food Drive",
    "Medical Outreach"
];
console.log(events2);{
    events2.push("Charity Concert");
    console.log(events2);
}

let programs5 = [
    "Medical Outreach",
    "Charity Concert"
];

console.log(programs5);

programs5.unshift("Food Drive");
programs5.push("Youth Seminar");

console.log(programs5);

programs5.shift();
programs5.pop();

console.log(programs5);

let events5 = [
    "Food Drive",
    "Medical Outreach",
    "Charity Concert",
    "Youth Seminar"
];
console.log(events5[events5.length - 1]);

let donations5 =[5000, 7000, 10000, 15000];
console.log(donations5[donations5.length-1]);

let events6 = [
    "Food Drive",
    "Medical Outreach",
];
events6.push("Charity Concert");
events6.push("Youth Seminar");

console.log(events6[events6.length-1])

let volunteers6 = [
    "Seun",
    "David",
    "Grace",
    "Esther"
];
console.log(volunteers6[volunteers6.length - 1]);

console.log(volunteers6[0]);

let cities = [
    "Lagos",
    "Ibadan",
    "Abuja"
];

cities[1] ="Kano";
console.log(cities);

let volunteers7 = [
    "Seun",
    "David",
    "Grace"
];

for (let i =0; i < volunteers7.length; i++){
    console.log(volunteers7[i]);
}

let programs7 = [
    "Food Drive",
    "Medical Outreach",
    "Youth Seminar"
];

programs7[2] = "Community Outreach";

for (let i = 0; i < programs7.length; i++){
    console.log(programs7[i]);
}

// LEARNING FUNCTIONS

function greet(){
    console.log("Hello");
}
greet();

function welcomeVolunteer(name){
    console.log("Welcome " + name + " !")
}
welcomeVolunteer("Oluwaseun");
welcomeVolunteer("David");
welcomeVolunteer("Grace");

function thankDonor(name){
    console.log("Thank you for your donation, " + name + " !");
}
thankDonor("Dr. Martina");
thankDonor("Mr. Ade");
thankDonor("Mrs. Johnson");

function introduce(name){
    console.log("My name is " + name + ".");
}
introduce("Seun");
introduce("David");
introduce("Grace");

function registerVolunteer(name, city){
    console.log(name +" registered from " + city);
}
registerVolunteer("Seun", "Ibadan");
registerVolunteer("David", "Lagos");
registerVolunteer("Grace", "Abuja");










