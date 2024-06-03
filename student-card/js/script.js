
let student = document.getElementById("card");
var students = [

{
    name: "Dhara",
    age: 18,
    email: "dhara@gmail.com",
    contact:3245671234
},  
{
    name: "Astha",
    age: 18,
    email: "astha@gmail.com",
    contact:3245671234
},  
{
    name: "Urvisha",
    age: 20,
    email: "urvisha@gmail.com",
    contact:3245671234
},
{
    name: "Dipali",
    age: 18,
    email: "dipali@gmail.com",
    contact:3245671234
},  
{
    name: "Priya",
    age: 17,
    email: "priya@gmail.com",
    contact:3245671234
},  
{
    name: "Ragini",
    age: 16,
    email: "ragini@gmail.com",
    contact:3245671234
},  
{
    name: "Bhindi",
    age: 18,
    email: "nandni@gmail.com",
    contact:3245671234
},  
{
    name: "Devika",
    age: 20,
    email: "devika@gmail.com",
    contact:3245671234
}, 
{
    name: "Bhumika",
    age: 21,
    email: "bhumika@gmail.com",
    contact:3245671234
}, 
{
    name: "Tanisha",
    age: 19,
    email: "tanisha@gmail.com",
    contact:3245671234
},
{
    name: "Aesha",
    age: 20,
    email: "aesha@gmail.com",
    contact:3245671234
}, 
{
    name: "Shreya",
    age: 20,
    email: "shreya@gmail.com",
    contact:3245671234
},
{
    name: "Janvi",
    age: 19,
    email: "janvi@gmail.com",
    contact:3245671234
}, 
{
    name: "Nency",
    age: 18,
    email: "nency@gmail.com",
    contact:3245671234
},  
{
    name: "Divya",
    age: 22,
    email: "divya@gmail.com",
    contact:3245671234
},  
{
    name: "Vishwa",
    age: 19,
    email: "vishwa@gmail.com",
    contact:3245671234
},
{
    name: "Mehak",
    age: 20,
    email: "mehak@gmail.com",
    contact:3245671234
},
{
    name: "Hetvi",
    age: 20,
    email: "hetvi@gmail.com",
    contact:3245671234
},
{
    name: "Harshita",
    age: 21,
    email: "harshita@gmail.com",
    contact:3245671234
},  
{
    name: "Riddhi",
    age: 17,
    email: "riddhi@gmail.com",
    contact:3245671234
}, 
];

for (let i = 0; i < students.length; i++) {
    student.innerHTML += `<div class="col-3 mx-2 pt-3"><div class="shadow text-center text-dark"><div><img src="img/user-img.png" alt="img" class=" w-50"></div><div class="p-3"></div><h2>${students[i].name}</h2><h4>${students[i].age}</h4><h4>${students[i].email}</h4><h4 class="pb-5">${students[i].contact}</h4></div></div>`
}  

