/*
JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
       
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
*/
function concatstr(x, y) {
  console.log(x + "<>" + y);
}
concatstr("John", "Doe");

const info = {
  name: "balbla",
  surmane: "otherblabla",
  email: "notmyemail@.fr",
};

delete info.email;
console.log(info);

// 24) Create an array with 10 strings in it
const arr = Array.from(Array(10).keys());
console.log(arr);

const arr1 = Array.from("abcdefghij");
console.log(arr1);

const arr2 = [...Array(100)].map(() => Math.floor(Math.random() * 100)); // map() create a new array from the result of a new function
console.log(arr2);
//SECOND OPTION

function arrayrandom() {
  arr3 = [];
  for (i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 100);
    arr3.push(num);
  }

  console.log("OPTION2", arr3);
}
arrayrandom();

function min_max() {
  console.log(Math.min(...arr2));
  console.log(Math.max(...arr2));
}
min_max();

let first_array = [...Array(10)].map(() => Math.floor(Math.random() * 10));
let second_array = [...Array(10)].map(() => Math.floor(Math.random() * 10));
let third_array = [];
third_array.push(first_array);
third_array.push(second_array);
console.log(third_array);

function longest_array() {
  if (first_array.length < arr2.length) {
    return arr2;
  } else {
    return first_array;
  }
}

console.log("Longest array is : ", longest_array());

function Highest_sum() {
  sum1 = 0;
  sum2 = 0;
  first_array.forEach((element) => {
    sum1 += element;
  });
  arr2.forEach((element) => {
    sum2 += element;
  });

  if (sum1 > sum2) {
    return first_array;
  } else {
    return arr2;
  }
}
console.log("I have a higher sum ", Highest_sum());

//***********DOM**************

//31) Get element with ID "container" from the page
const container = document.getElementById("container");

//32) Get every "td" from the page
const td = document.getElementsByTagNameNS("td");

//33) Create a cycle that prints the text inside every td of the page
for (i = 0; i < 3; i++) {
  const tr = document.createElement("tr"); //rows

  for (j = 0; j < 3; j++) {
    const td = document.createElement("td"); // content of rows and columns
    const celltext = document.createTextNode("ABCD");
    td.appendchild(celltext);
    tr.appendchild(td);
  }
}

//34) Write a function to change the heading of the page
function changeheading() {
  const header = document.getElementsByTagName("h1")[0];
  header.innerHTML = "change header of my page";
}

//35) Write a function to add an extra row to the table
function addrows() {
  const table = document.querySelector("table");

  for (i = 0; i < 3; i++) {
    const tr = document.createElement("tr"); //create rows

    table.appendChild(tr);
  }
}
//36) Write a function to add the class "test" to each row in the table

function addaclass() {
  const row = document.getElementsByTagName("tr");
  for (i = 0; i < row.length; i++) {
    row[i].classList.add("test");
  }
}
//37) Write a function to add a red background to every link in the page

function changebackground() {
  const link = document.getElementsByTagName("a");
  for (i = 0; i < link.length; i++) {
    link[i].style.background.color = "red";
  }
}

//38) Console log "Page loaded" when the page is correctly loaded

window.load = function () {
  console.log("Page loaded");
};
//39) Write a function to add new items to a UL
function addnew() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "text to write";
  ul.appendChild("li");
}

//40) Write a function to empty a list

function emptylist() {
  const ul = document.getElementsBy("ul");
  ul.innerHTML = "";
}

//***********EXTRA ******************

//41) Add an eventListener to alert when the mouse is over a link, displaying the URL
const a = document.getElementsByTagName("a")[0];

a.addEventListener("mouseover", function () {
  alert(a.href);
});

//42) Add a button to hide every image on the page
const btn = document.createElement("button");
btn.id = "hideimage";
body.appendChild(btn);
const image = document.getElementsByTagName("img");

btn.onclick = function () {
  for (i = 0; i < image.length; i++) {
    if (image[i].style.display === "block") {
      image[i].style.display = "none";
    }
  }
};

//OPTION2
Image.addEventListener("click", function () {
  for (i = 0; i < image.length; i++) {
    if (image[i].style.display === "block") {
      image[i].style.display = "none";
    }
  }
});

//43) Add a button to hide and show the table from the page
const btn = document.createElement("button");
btn.id = "hidetable";
btn.innerHTML = "Hide";
body.appendChild(btn);
const table = document.getElementsByTagName("table")[0];

btn.onclick = function () {
  table.style.display = "none";
};

btn.onclick = function () {
  if ((table.style.display = "none")) {
    table.style.display = "block";
  } else {
    table.style.display = "none";
  }
};
//44) Write a function to sum every number inside the TD (if the content is numeric)
function sum() {
  const sum = 0;
  const td = getElementsByTagName("td");
  for (i = 0; i < td.length; i++) {
    if (!isNaN(td[i].value)) {
      sum += td[i].value;
    }
  }
}

//45) Delete the last letter from the title each time the user clicks on it
const h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", deletelastchar);
function deletelastchar() {
  h1.innerText.slice(0, -1);
}
//46) Change a single TD background color when the user clicks on it
const td = document.getElementsByTagName("td")[0];

td.addEventListener("click", function () {
  td.style.background.color = "blue";
});

//47) Add a button DELETE, on click it should delete a random TD from the page
const tds = document.querySelectorAll(".td");
const btn = document.createElement("button");
btn.id = "delete";
btn.innerHTML = "Delete";

btn.onclick = function () {
  const ran = Math.floor(Math.random() * tds.length);
  tds[ran].remove();
};

//48) Add a pink border to a cell when the mouse is over it

const cell = document.querySelectorAll("#table td")[0];
cell.addEventListener("mouseover", function () {
  cell.style.borderColor = "pink";
});

//49) Write a function to add a table with 4 rows and 3 columns programmatically
const createTable = function () {
  const body = document.getElementsByTagName("body")[0];
  const table = document.createElement("table");
  table.style.width = "100px";
  table.style.border = "1px solid black";

  for (i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    table.appendChild(trs);

    for (j = 0; j < 3; j++) {
      const tds = document.createElement("td");
      tr.appendChild(tds);
    }
  }

  body.appendChild(table);
};

//50) Write a function to remove the table from the page


const removetable = function(){

    
    const table = document.querySelector("#table");
    if (table){
        table.parentNode.removeChild(table)

    }
    
}