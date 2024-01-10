function example_one() {
    for (let i = 1; i <= 255; i++) {
        console.log("printing i", i)
    }
}

// example_one()
// Line 1: Creating a job and calling it example_one
// Line 2: Starts the job instructions which are to go through all the number 1-255 and each time the next set of instructions is finished increase the current value by 1
// Line 3: more instructions - here explains what we are to do with each number 1-255 in this case simply print out the value that it is on
// Line 4: Ends 2nd set of instructions
// Line 5: Ends the job instructions
// Line 7: Activates the job


function one() {
    let sum = 0
    for (let i = 0; i <= 255; i++) {
        sum += i
        console.log("print current value: ", i, "print current sum: ", sum)
    }
}
// one()


let arrOne = [4,[],8,[9,6,3],7]

function two(arr) {
    // let count = 0
    for (let i = 0; i < arr.length; i++) {
        console.log("Logging i", arr[i])
        if (Array.isArray(arr[i])) {
            console.log("Yes", arr[i].length)
        }
    }
}
// two(arrOne)


let arrTwo = [4,[],8,[9,6,3],7]

function three(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        console.log("Logging i", arr[i])
        if (Array.isArray(arr[i])) {
            console.log("Yes", arr[i].length)
            count++
        }
    }
    console.log(count)
}
// three(arrTwo)


function fizzBuzz() {
    for(var i = 1; i <= 20; i++) { 
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }         
        else if(i % 3 == 0) {  // if divided by said number is it a whole number or in this case 0 (% modulus)
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}
// fizzBuzz()

// else if will only run if the previous if or else if did not run
// else is ignored if an if or else if is true

// i = 1 setting the value of i to one -> setting the variable on the left to the value on the right
// i == 1 comparing 2 values for equality
// i === 1 comparing 2 values and data type


var c = 1
var d = 'one'
var e = '1'

// c === c
// c != d
// c == e

var g = c + e
console.log(g)
var f = c + parseInt(e)
console.log(f)


function theDateTime() {
    // console.log("inside the function")
    var t = new Date()
    console.log("the time:", t)
    document.getElementById('dateTime').innerHTML = t
    // document = hey html doc .getElementByIt = find the id on the doc with the name('dateTime') .innerHTML = replace html content of the id's element with = t
}
// theDateTime()

function theDate() {
    // console.log("inside the function")
    var t = new Date()
    var temp = t.toString()
    dateOnly = temp.slice(15, 15)
    console.log("the date:", temp)
    console.log("the date:", dateOnly)
    // document.getElementById('date').innerHTML = dateOnly
}
theDate()