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

const arr2 = [...Array(99)].map(() => Math.floor(Math.random ()* 100));// map() create a new array from the result of a new function
console.log(arr2)


console.log (Math.min(...arr2))
console.log(Math.max(...arr2))


