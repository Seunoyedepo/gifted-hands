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

// LEARNING RETURN FUNCTION
function addNumber(){
    return 5 + 3;
}
let result = addNumber;
console.log(result);

function getMission(){
    return "Serving Humanity";
}
let mission = getMission();
console.log(mission);

function add(a, b){
    return a + b;
}
let answer = add(10, 5);
console.log(answer);

function totalDonation(first, second){
    return first + second;
}
let donation6 = totalDonation(5000, 7000);
console.log(donation6);

function multiply(a, b){
    return a * b;
}
let answer1 = multiply(6, 4);
console.log(answer1);

// USING RETURNED VALUES

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
let fullNames = fullName("Seun", "Oyedepo");
console.log(fullNames);

function calculateAge(birthYear){
    return 2026 - birthYear;
}
let age1 = calculateAge(1954);
console.log(age1);

// FUNCTIONS CALLING OTHER FUNCTIONS
function add(a, b){
    return a + b;
}
function doubleNumber(number){
    return number * 2
}
let addition = add(10, 5);
let multiple = doubleNumber(addition);
console.log(multiple);

// ANOTHER EXAMPLE
function totalDonation1(first, second){
    return first + second;
}
function thankDonor1(total){
    return "Thank you! Total donation is N" + total;
}

let a = totalDonation(5000, 10000);
let b = thankDonor1(a);

console.log(b);

function multiply(a, b){
    return a * b;
}
function showresult(answer2){
    return "The answer is" + " " +answer2
}

let result1 = multiply(8, 5);
let c = showresult(result1);
console.log(c);

// SCOPE (LOCAL SCOPE)
function greet1(){
    let name1 = "Seun";
    console.log(name1);
}
greet1();

// GLOBAL SCOPE
let organization2 = "Gifted Hands";

function showOrganization(){
    console.log(organization2);
}

showOrganization();
console.log(organization2);

// PRACTICE CHALLENGE
let organization3 = "Gifted Hands";

function showInfo(){
    let volunteer2 = "Seun Oyedepo";
    console.log(organization3);
    console.log(volunteer2);
}
showInfo();

let organization1 = "Gifted Hands";
function showOrganization1(){
    let organization1 = "Hope Foundation";
    console.log(organization1);
}
showOrganization1();
console.log(organization1);

function registerVolunteer1(name2){
    let organization4 = "Gifted Hands";
    
}

//LEARNING OBJECT
let volunteer3 = {
    name : "Seun Oyedepo",
    Age : 45,
    city : "Ibadan",
}
console.log(volunteer3.Age);
console.log(volunteer3.name);
console.log(volunteer3.city);

let organization5 = {
    name : "Gifted Hands",
    city : "Ibadan",
    founded : "2020"
};
console.log(organization5.name);

let event1 = {
    title : "Food Drive",
    location : "Ibadan",
    year : 2026
};

console.log(event1.title);
console.log(event1.location);

let volunteer4 = {
    name : "Oluwaseun",
    city : "Ibadan",
    role : "Volunteer"
};
volunteer4.city = "Lagos";
volunteer4.role = "Team Leader";
console.log(volunteer4.city);
console.log(volunteer4.role);


let organization6 = {
    name : "Gifted Hands",
}
organization6.city = "Ibadan";
organization6.founded = 2020;

console.log(organization6.city);
console.log(organization6.founded);

// ARRAYS OF OBJECTS
let events3 = [
    {
        title : "Food Drive",
        city : "Ibadan"
    },

    {
        title : "Medical Outreach",
        city : "Lagos"
    },

    {
        title : "Youth Seminar",
        city : "Abuja"
    }

];

console.log(events3[0].title);
console.log(events3[1].city);
console.log(events3[2].title);


// PRACTICE CHALLENGE
let programs2 = [
    {
        title : "Food Drive",
        city : "Ibadan"
    },

    {
        title : "Medical Outreach",
        city : "Lagos",
    },

    {
        title : "Youth Seminar",
        city : "Abuja"
    },
];

for(let i = 0; i < programs2.length; i++){
    console.log(programs2[i].title + " - " + programs2[i].city);
}

// PRACTICE CHALLENGE OF WHOLE OBJECT VS PROPERTY
let programs4 = [
    {
        title : "Food Drive",
        city : "Ibadan",
        year : 2026
    },

    {
        title : "Medical Outreach",
        city : "Lagos",
        year : 2026
    },
];

console.log(programs4[0]);
console.log(programs4[0].title);
console.log(programs4[1].city);
console.log(programs4[1].year);

// LEARNING FOR...OF LOOP
let volunteer1 = ["Seun Oyedepo", "David Ubani", "Grace Nnamdi"];
for (let v of volunteer1){
    console.log(v);
};

let programs6 = [
    {
        title : "Food Drive",
        city : "Ibadan"
    },

    {
        title : "Medical Outreach",
        city : "Lagos"
    },

    {
        title : "Youth Seminar",
        city : "Abuja"
    }
];

for (let p of programs6){
    console.log(p.title + " (" + p.city + ")");
};

// PRACTICE CHALLENGE
let volunteer5 = [
    {
        name : "Seun",
        city : "Ibadan"
    },

    {
        name : "David",
        city : "Lagos"
    },

    {
        name : "Grace",
        city : "Abuja"
    }
];

for (let vlt of volunteer5){
    console.log(vlt.name + " - " + vlt.city);
};

// LEARNING JAVASCRIPT METHODS
let volunteers2 = [
    "Seun",
    "David",
    "Grace"
];
console.log(volunteers2.includes("David"))

let event2 = [
    "Food Drive",
    "Medical Outreach",
    "Youth Seminar"
];
console.log(event2.includes("Food Drive"));
console.log(event2.includes("Charity Concert"));
console.log(event2.includes("Youth Seminar"));

let programs8 =[
    "Food Drive",
    "Medical Outreach",
    "Youth seminar"
];
console.log(programs8.join(", "));

let volunteer6 = [
    "Seun",
    "David",
    "Grace"
];

console.log("Volunteers: " + volunteer6.join(", "));

let cities1 =[
    "Ibadan",
    "Lagos",
    "Abuja"
];
console.log(cities1.join(", "));
console.log(cities1.join(" | "));
console.log("Cities:" + cities1.join(", "));

// LEARNING OTHER ARRAY METHODS
let programs9 = [
    "Food Drive",
    "Medical Outreach",
    "Youth Seminar"
];
console.log(programs9.indexOf("Food Drive"));

let events1 = [
    "Food Drive",
    "Medical Outreach",
    "Youth Seminar"
];
console.log(events1.indexOf("Food Drive"));
console.log(events1.indexOf("Youth Seminar"));
console.log(events1.indexOf("Charity Concert"));

let volunteers3 = [
    "Seun",
    "David",
    "Grace",
    "Esther",
    "Daniel"
];
console.log(volunteers3.slice(0, 2));
console.log(volunteers3.slice(2));
console.log(volunteers3);

let morningEvents = [
    "Food Drive",
    "Medical Outreach"
];
let eveningEvents = [
    "Youth Seminar",
    "Charity Concert"
];
let allEvents = morningEvents.concat(eveningEvents);
console.log(allEvents);
console.log(morningEvents);
console.log(eveningEvents);








