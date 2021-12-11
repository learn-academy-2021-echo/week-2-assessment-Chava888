// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

//Must do a red-green-refactor process:
//First step make the test fail, expected to fail due to undefined function since function has not been defined.
//Second step create the function, make the test pass.
//Function will have conditional to verify value is divisible by three.
//The conditional statement will be number % 3 === 0, therefore divisible by three.
//Third step refactor to optimize and make the code cleaner, make the test pass.

/* =====Misspelled toEqual therefore test was not passing after defining a function======
//First step 1:
describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num1)).toEaqual("15 is divisible by three")
    })
});
//Test result failed (ReferenceError: divisibleByThree is not defined).

//Implimenting a test for the other two cases, num2 & num3.
describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num2)).toEaqual("0 is divisible by three")
    })
});

describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num3)).toEaqual("-7 is not divisible by three")
    })
});
*/

//Second Attempt after correctly spelling toEqual
//First step 1:
describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
    })
});
//Test result failed (ReferenceError: divisibleByThree is not defined).

//Implimenting a test for the other two cases, num2 & num3.
describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
    })
});

describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
});


// b) Create the function that makes the test pass.

//Step 2: Make a function to make the tests pass.

//Function will have conditional statement to verify value is divisible by three.
//The conditional statement will be number % 3 === 0, to check if divisible by three.
//Outputs a string based on the boolean result.
// divisibleByThree = (number) => {
//     if (number % 3 === 0) {
//         return `${number} is divisible by three`
//     }
//     else {
//         return `${number} is not divisible by three`
//     }
// }

//Step 3 refactor - optimize the code and make it clear, placed all expect in one it() and use ternary operator for function 

describe("divisibleByThree", () => {

    it("function takes an input value as an argument and outputs a string if it is or not divisible by three", () => {

        expect(divisibleByThree(num1)).toEqual("15 is divisible by three");
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three");
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three");
    })
});

divisibleByThree = (number) => {
    return (number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`)
}









// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


//Must do a red-green-refactor process:
//First step make the test fail, expected to fail due to undefined function since function has not been defined.
//Second step create the function, make the test pass.
//Function will consist of a .map() to loop all the elements in the array,
//.toUpperCase() to capitalize the first letter of each element in the array.
//.replace(existing, new) to replace the first letter of each element with a capital letter.
//Third step refactor to optimize and make the code cleaner, make the test pass.


//First step 1:
describe("upperCaseArray", () => {

    it("function takes an input array as an argument and outputs an array with all capital letters", () => {

        expect(upperCaseArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
});
//Test result failed (ReferenceError: upperCaseArray is not defined).

//Implimenting a test for randomNouns2.
describe("upperCaseArray", () => {

    it("function takes an input array as an argument and outputs an array with all capital letters", () => {

        expect(upperCaseArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
});


// b) Create the function that makes the test pass.
//Function will consist of a .map() to loop all the elements in the array,
// and .toUpperCase() to capitalize the first letter of each element in the array.
//.replace(existing, new) to replace the first letter of each element in the array with a capital letter.

upperCaseArray = (array) => {
    return array.map((character) => {
        let capitalLetter = character[0].toUpperCase();
        return character.replace(character[0], capitalLetter)
    })
};

//Step 3 optimize and make code clear, placed all expect in one it()
describe("upperCaseArray", () => {

    it("function takes an input array as an argument and outputs an array with all capital letters", () => {

        expect(upperCaseArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
        expect(upperCaseArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);
    })
});










// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//Must do a red-green-refactor process:
//First step make the test fail, expected to fail due to undefined function since function has not been defined.
//Second step create the function, make the test pass.
//Function will consist of using indexOf to search for a,e,i,o,u
//Third step refactor to optimize and make the code cleaner, make the test pass.



//First step 1:
describe("firstVowel", () => {

    it("function takes an input string as an argument and outputs a number that represents the index of the first vowel in the string", () => {

        expect(firstVowel(vowelTester1)).toEqual(1)
    })
});
//Test result failed (ReferenceError: firstVowel is not defined).

//Implimenting a test for vowelTester2 and vowelTester3.
describe("firstVowel", () => {

    it("function takes an input string as an argument and outputs a number that represents the index of the first vowel in the string", () => {

        expect(firstVowel(vowelTester2)).toEqual(0)
    })
});

describe("firstVowel", () => {

    it("function takes an input string as an argument and outputs a number that represents the index of the first vowel in the string", () => {

        expect(firstVowel(vowelTester3)).toEqual(2)
    })
});



// b) Create the function that makes the test pass.

//Function will consist of using indexOf to search for a,e,i,o,u
//Search for all first occurances for the different vowels
//store all index values in an array for the different vowels
//Perform a filter to remove -1 
//Select the minimum index value for all vowels.

/*
firstVowel = (word) => {
    //Store the indices for each vowel
    let vowelA = word.indexOf("a");
    let vowelE = word.indexOf("e");
    let vowelI = word.indexOf("i");
    let vowelO = word.indexOf("o");
    let vowelU = word.indexOf("u");

    //Store the indices of all vowels in an array
    let vowelArray = [vowelA, vowelE, vowelI, vowelO, vowelU]

    //Filter to remove the index of -1 value because indexOf returns -1 when a vowel doesn't exist.
    let indexVowel = vowelArray.filter(value => {
        return value >= 0;
    })

    //Conduct a minimum search evaluation to return the index of the first vowel in a string.
    return Math.min(...indexVowel)

}
*/

//Step 3 optimize and make code clear, placed all expect in one it() and use .map on function to reduce code lines
describe("firstVowel", () => {

    it("function takes an input string as an argument and outputs a number that represents the index of the first vowel in the string", () => {

        expect(firstVowel(vowelTester1)).toEqual(1);
        expect(firstVowel(vowelTester2)).toEqual(0);
        expect(firstVowel(vowelTester3)).toEqual(2);
    })
});


firstVowel = (word) => {

    // //Store the indices of all vowels in an array
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelArray = vowels.map(vowel => word.indexOf(vowel))

    //Filter to remove the index of -1 value because indexOf returns -1 when a vowel doesn't exist.
    let indexVowel = vowelArray.filter(value => value >= 0)

    //Conduct a minimum search evaluation to return the index of the first vowel in a string.
    return Math.min(...indexVowel)

}