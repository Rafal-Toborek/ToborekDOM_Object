const myDiv = document.getElementById("myDiv");

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

H1element = H1element.classList.add("highlight");
document.getElementById("myDiv").querySelector("h1").style.backgroundColor = "red";

let myButton = document.createElement("button");
let buttonText = document.createTextNode("New list item");
document.body.appendChild(myButton);
myButton.appendChild(buttonText);

myButton.addEventListener("click", function () {
    let newListItem = document.createElement("li");
    newListItem.style.backgroundColor = randomColor();
    let newListItemText = document.createTextNode("New list item " + (Ulelement.children.length + 1));
    newListItem.appendChild(newListItemText);
    Ulelement.appendChild(newListItem);
});