// The Problem
// Write a program that goes 1-20. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// step 1 go through all the numbers 1-20
// step 2 find the multiples of 3, 5 and both

function fizzBuzz() { // creating a job called fizzBuzz
    for(var i = 1; i <=20; i++) { // creating a repeating mini job that will go through each number 1-20
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }         
        else if(i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}
fizzBuzz()

function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// line 21 = creating a job/ or mini program called hello
// line 22 = instructions for job saying print the word hello
// line 23 =  ending jon
//  line 24 = run the job - like pressing enter
// line 25 = printing the word dojo

// var = noun - person place thing
// function = verb = action

// #1 Not reusable
var a = 1
var b = 2
var c = 3.14
function add01() {
    var sum = a + b
    return sum  // does not print anything to the console but typically prints to web page
}
console.log(add01()) // calling a function like this allows us to visually see the return statement
add01()

// #2 DRY = Does not repeat it's self = aka reusable
function add02(a,b) {
    var sum = a + b
    return sum
}
console.log(add02(2,4))
console.log(add02(2,c))


// ***********************************
function howMuchLeft(cake, humans) {
    var result = cake % humans
    console.log(result)
    return result
}
// howMuchLeft(12, 5)

function feature(cake, humans) {
    var condition = howMuchLeft(cake, humans)
    if (condition === 0) {
        console.log("No soup for you")
    }
    else if(condition <= 2) {
        console.log("Left overs")
    }
    else if(condition >= 3 && condition <= 5) {
        console.log("share away")
    }
    else if(condition > 5) {
        console.log("Party Time")
    }
}
// feature(12,5)
// feature(13,5)
// feature(20,2)
feature(13,7)

// = assigning c = 1
// == the same 1 == '1'
// === exactly the same 1 === 1