// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// For example, "racecar" and "A man, a plan, a canal, Panama!" are palindromes.

// remove spaces
// all lower case
// remove special char

// all lower case = toLowerCase()

var a = 'disH'
var b = a.toLowerCase()
// console.log(b)

a = 'Hello World'
b = a.toLowerCase().split(" ").join("")
// console.log(b)

a = 'Hello! World!'
b = a.toLowerCase().split(" ").join("").replace(/!/g, '')
// console.log(b)

a = 'Hello!, World'
b = a.toLowerCase().split(" ").join("").replace(/!,/g, /,/g, '')  // this will insert , in place of !
// console.log('#3',b)


a = 'Hello!, World how are you'
b = a.toLowerCase().split(" ").join("").replace(/[^a-z]/g, '') // ^ means not a-z 
// console.log('#4',b)

function normalize(word) {
    let fixed = word.toLowerCase().split(" ").join("").replace(/[^a-z]/g, '')
    return fixed
}

function palindrome(word) {
    let pal = normalize(word)
    let palindrome = true
    for(var i = 0; i < pal.length/2; i++) {
        if(pal[i] != pal[pal.length-i-1]) {
            palindrome = false
            return palindrome
        }
    }
    return palindrome
}
// console.log(palindrome('Race Car!'))
// console.log(palindrome('I am a taco'))
// console.log(palindrome('hello'))


// Problem 2: Reverse a String
// Create a function that takes a string as input and returns the string reversed. For example, if the input is "hello," the output should be "olleh."

function reverseString(word) {
    let one = normalize(word)
    let temp = ''
    for(var i = 0; i < one.length/2; i++) {
        temp = one[i]
        one[i] = one[one.length-i-1]
        one[one.length-i-1] = temp
        console.log('temp',temp, 'curr index',one[i], 'last',one[one.length-i-1])
    }
    return one
}

// console.log(reverseString('hello'))

function test(word) {
    let one = normalize(word)
    let two = ''
    let a = ''
    let temp = []
    for(var i = 0; i=one.length; i++) {
        a = one[i]
        temp.push(a)
    }
    console.log(temp)
    for(var y = 0; y < temp.length; y++) {
        two += temp[y]
    }
    console.log(two)
}
test('hello')