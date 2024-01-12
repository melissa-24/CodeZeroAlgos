// 1

class Developer { // Defines how items will be created with similar traits or characteristics  (Attributes)
    constructor(name, email, location){
      this.languages = []
      this.name = name
      this.skills = []
      this.location = location
      this.email = email
      this.title = ''
      this.sites = []
    } // In constructor (items needed for creation) everything else is predefined or optional

    // The 3 functions are part of the class and need to have the class name in front to be activated these are the actions that the items created can do (Methods)
    createWebsite(siteName, stack, description) {
      var site = new Website(siteName, stack, description)
      this.sites.push(site)
      console.log(this.name, 'created', site.siteName)
      return site
    }
    // Website (capital because it is another class) is being created by this.name (the developer activating this function) with the parameters of siteName, stack, description
    // return vs console.log = console.log outputs to the developers screen (terminal/console) and return to the user (typically a webpage or something)
    // return gives something back console.log 'says' something back
    brokeSite(other) {
    //   console.log(this.name, 'Is a meanie head and created a 404 on', other.sites[0].siteName)
    }
    fixedSite(other) {
      console.log(this.name, 'is the best TA ever and fixed', other.sites[0].siteName)
    }
  }

bob = new Developer('bob', 'bob@bob.com', 'Remote')
jane = new Developer('jane', 'jane@jane.com', 'Remote')
bob.brokeSite(jane)  // print out would looks something like bob is a meanie head and created a 404 on janes website

// 2.
const anObject = { 
    prop1: "a string", 
    prop2: 100, 
    prop3: true, 
    prop4: null, 
    prop5: ["arrayInd0", "arrayInd1", "arrayInd2"],
    prop6: {'name': 'Melissa'}
}
// Object with key value pairs - Const means can't be changed (immutable)
console.log(typeof anObject.prop1)
console.log(typeof anObject.prop2)
console.log(typeof anObject.prop3)
console.log(typeof anObject.prop4)
console.log(typeof anObject.prop5)
console.log(typeof anObject.prop6)

// 3
const sadDay = () => {
    console.log("Testing")
    sadDay()
}
sadDay()


data = [
    3,
    [1, 2, 3, 4],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [
            [1, 2, 3],
            [1, 2, 3, 4, [1, 2, 3, 4]],
        ]
    ],
    [3, 4, 5],
    1,
    3,
]


var sum = 0
var final = 0
function aaronsCrazyArray(d) {
    for (var i=0; i<d.length;i++) { // look in current array go to it's end
        if (!Array.isArray(d[i])) { // if current index is not an array follow the if instructions
            sum = sum + d[i] // loop 1 => 0 = 0 + 3 . loop 2 
        }
        else { // otherwise follow me
            aaronsCrazyArray(d[i])
        }
    }
    // console.log(sum)
    final = sum
    return final
}
aaronsCrazyArray(data)
console.log("Aarons crazy Array final sum", final)


let stackOfDishes = []

let theDishes = "Grandmas Dishes"
// theDishes = "racecar"

console.log('the dishes', theDishes)

for (var d = 0; d < theDishes.length; d++) {
    stackOfDishes.push(theDishes[d])
}

console.log(stackOfDishes)

let table = ''
console.log('the table', table)

var len = stackOfDishes.length
for (var d = 0; d < len; d++) {
    table += stackOfDishes.pop()

}
// var len = theDishes.length
// for (var d = 0; d < len; d++) {
//     table += theDishes.pop()

// }
// this won't work because theDishes is 1 string not an array of strings
console.log('we set the table Grandma!', table)