// Write a function that finds the sum of all multiples of 3 or 5 below a given number. For example, if the given number is 10, the multiples of 3 and 5 below 10 are 3, 5, 6, and 9. The sum of these multiples is 23.

// given number = x
// numbers that are multiples of 3 or 5 = arr01
// sum the array

function version01(x) {
    let arr01 = []
    let sum = 0
    for(var i = 1; i < x; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            arr01.push(i)
        }
    }
    for(var i = 0; i < arr01.length; i++) {
        sum += arr01[i]
    }
    // return arr01
    return sum
}

// console.log(version01(10))

function version02(x) {
    let sum = 0
    for(var i = 1; i < x; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    console.log(sum)
}
// version02(10)

// Write a function that generates the Fibonacci sequence up to a specified number of terms. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

// For example, if the specified number of terms is 8, the Fibonacci sequence would be: 0, 1, 1, 2, 3, 5, 8, 13.

// number of terms = x
// sum = sum of last 2 loop values
// print the fibonacci sequence
// could have if statement to see if arr.length is < 2 other wise sum arr.length[-1] + arr.length[-2] arr.push i

function fibVersion01(x) {
    let fibArray = []
    for(var i = 0; i < x; i++) {
        if(fibArray.length < 2) {
            fibArray.push(i)
        } else {
            var a = fibArray[fibArray.length-1] + fibArray[fibArray.length-2]
            fibArray.push(a)
        }
    }
    console.log(fibArray)
}
// fibVersion01(8)

function fibVersion02(x) {
    let fibArray = []
    for(var i = 0; i < x; i++) {
        if(fibArray.length < 2) {
            fibArray.push(i)
        } else {
            fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
        }
    }
    console.log(fibArray)
}
// fibVersion02(8)

function fibVersion03(x) {
    let fibArray = [0,1]
    for(var i = 2; i < x; i++) {
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    }
    console.log(fibArray)
}
// fibVersion03(8)

function fibVersion04(x) {
    let fibArray = []
    for(var i = 0; i < x; i++) {
        
    }
}


// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// For example, "racecar" and "A man, a plan, a canal, Panama!" are palindromes.

// remove spaces
// all lower case
// remove special char

// all lower case = toLowerCase()

var a = 'disH'
var b = a.toLowerCase()
console.log(b)

a = 'Hello World'
b = a.toLowerCase().split(" ").join("")
console.log(b)

a = 'Hello! World!'
b = a.toLowerCase().split(" ").join("").replace(/!/g, '')
console.log(b)