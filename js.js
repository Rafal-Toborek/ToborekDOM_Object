const myDiv = document.getElementById("myDiv");

let H1element = document.createElement("h1");
let H1text = document.createTextNode("Welcome to DOM homework");
H1element.appendChild(H1text);
myDiv.appendChild(H1element);

let Pelement = document.createElement("p");
let Ptext = document.createTextNode("This is your first DOM homework assignment");
Pelement.appendChild(Ptext);
myDiv.appendChild(Pelement);

let Ulelement = document.createElement("ul");
let Li1 = document.createElement("li");
let Li1text = document.createTextNode("Hamburger");
Li1.appendChild(Li1text);
Ulelement.appendChild(Li1);
let Li2 = document.createElement("li");
let Li2text = document.createTextNode("Cheeseburger");
Li2.appendChild(Li2text);
Ulelement.appendChild(Li2);
let Li3 = document.createElement("li");
let Li3text = document.createTextNode("Big Mac With Fries");
Li3.appendChild(Li3text);
Ulelement.appendChild(Li3);
Ulelement.appendChild(Li1, Li2, Li3,);
myDiv.appendChild(Ulelement);
