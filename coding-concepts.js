// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.split(""))

// a) Your answer: ["E","c","h","o"," ","2","0","2","1"]
// b) Verify and explain: Correct. The reason for the output is the split() function splits a string into an array and seperates the string
// accoring to the input argument. For this case the input argument was "" - no space, therefore separate the string into individual characters.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: Wrong, forgot the return so silly on my part. The result was undefined because the function has no return, so the function will not return anything to console.log().



// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Correct. The .map() is multiplying every element of the array by a factor of 2. The input function inside .map has an implict arrow function therefore return is not required.
//Implicit arrow function is ()=>() syntax for one expression, it is implicitly stated the return.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Correct. The .filter() is filtering out the even numbers value % 2 !== 0. The input function inside .filter has an implict arrow function therefore return is not required.
//Implicit arrow function is ()=>() syntax for one expression, it is implicitly stated the return.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Correct. The code is selecting a property within myCodingSkills object that has a key of languages, and selecting index of 0 for languages.
//Therefore the console.log() will output the first element of the array that is stored in languages.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
      this.cohort = "Delta",
      this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:{student: "George", cohort : "Delta", year: 2021}



// b) Verify and explain: Incorrect. The output was Learn { student: 'George', cohort: 'Delta', year: 2021 }, 
// The class "Learn" was used to create the new object and it is shown as part of the output.
// The object generated has "student: George" because it used the input parameter of the constructor of class Learn, dynamic property.
//The other properties (cohort, year) are identical to the class Learn because they are considered static/hard coded.
