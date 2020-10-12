/*
JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
*/
function concatstr(x,y){

    console.log((x +'<>'+ y));
}
concatstr('John','Doe');

const info ={
 name:'balbla',
 surmane:'otherblabla',
 email:'notmyemail@.fr'
}

delete info.email 
console.log(info)

const arr = Array.from(Array(10).keys());
console.log(arr)

const arr1 = Array.from('abcdefghij')
console.log(arr1)

const arr2 = [...Array(100)].map(() => Math.floor(Math.random ()* 100));// map() create a new array from the result of a new function
console.log(arr2)
//SECOND OPTION

 function arrayrandom() {
    

 arr3 =[];
  for(i=0;i<100;i++){
    
    const num =  Math.floor(Math.random ()* 100);
    arr3.push(num);
 }

  console.log( 'OPTION2' , arr3)
}
arrayrandom()


function min_max(){

    console.log (Math.min(...arr2))
    console.log(Math.max(...arr2))  
}
min_max()

let first_array = [...Array(10)].map(() => Math.floor(Math.random ()* 10))
let second_array = [...Array(10)].map(() => Math.floor(Math.random ()* 10))
let third_array = [];
third_array.push(first_array)
third_array.push(second_array)
console.log(third_array);

function longest_array() {

    if (first_array.length < arr2.length){

        return arr2
    }else{
        return first_array;
    }
    
}

console.log('Longest array is : ', longest_array())

function Highest_sum () {

    sum1 = 0;
    sum2 =0;
 first_array.forEach(element => {
     sum1+=element;
     
 });
 arr2.forEach(element => {

    sum2+=element;
    
     
 });

 if (sum1>sum2){

    return first_array;
 }else{

    return arr2
 }
    

}
console.log('I have a higher sum ',Highest_sum())

/*
    ***********DOM**************
*/

//31) Get element with ID "container" from the page
const container = document.getElementById('container')


//32) Get every "td" from the page
const td = document.getElementsByTagNameNS('td')

 //33) Create a cycle that prints the text inside every td of the page
for(i=0;i<3;i++){
   const tr = document.createElement('tr') //rows


   for(j =0;j<3;j++){
    
    const td = document.createElement('td') // content of rows and columns
    const celltext= document.createTextNode('ABCD')
    td.appendchild(celltext);
    tr.appendchild(td);

   }
}

//34) Write a function to change the heading of the page
function changeheading(){
 const header = document.getElementsByTagName('h1')
 header.innerHTML = 'change header of my page'

}

//35) Write a function to add an extra row to the table
function addrows(){
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    for(i=0;i<3;i++){
        const tr = document.createElement('tr') //create rows

        tbody.appendChild(tr)
    }
}
//36) Write a function to add the class "test" to each row in the table

function addaclass(){

 const row = document.getElementsByTagName('tr')
    row.classList.add('test')

}
//37) Write a function to add a red background to every link in the page

function changebackground(){
   
    const link = document.getElementsByTagName('a')
    for(i=0;i<link.length;i++){

        link[i].style.background.color = 'red' 
    }
   
}

//38) Console log "Page loaded" when the page is correctly loaded

window.load = function (){
    alert('Page loaded')
   
}
//39) Write a function to add new items to a UL
function addnew(){
    const ul = document.getElementsByTagName('ul')
    const li = document.createElement('li')
    const item = document.createTextNode('Dress')
    ul.appendChild('li')
    li.appendChild('item')
}

//40) Write a function to empty a list

function emptylist(){

 const li = document.getElementsBy('li')
 li.removechild('item')

}
