# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is a placeholder variable where the argument will be passed on when function is invoked. The argument is the actual input that will go into the function to execute the code when the function is invoked. Simple terms the argument is the input and parameter is a placeholder for the input in the function.


  Researched answer:
Parameters are placeholder variables listed as a part of a function while arguments are the actual values that are passed to the function when invoked.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The method applies to arrays, the inputs parameters are element values of the selected array, a input function, and the actual array itself where .map() is applied. The input function will create an action that will be applicable to every element, a for loop, of the selected array. The final result is a new array of equal length of the selected array. The required inputs is the actual element values of the selected array and an input function. The selected array itself is optional argument. 

  Researched answer:
The predifined parameters are the single elements of the selected array, index, array itself, and a function. The required parameters are the individual elements of an array and a function. The optional parameters are the array and index of each element of the selected array. 


3. What is object destructuring?

  Your answer:

The action of breaking down an object to its properites and methods. The destructing of objects allows the storage of single properties and methods into single variables. 


  Researched answer:
Extraction of properties from objects and assign them to distinct variables.


4. What is the difference between a function and a method?

  Your answer: A function is a block of code, which is encapsulated, that manipulates data based on input arguments and returns an output. A method is identical to a function, however, the function is stored inside an object. A method is a function stored in an object therefore, a key is assign to the function and the key will be required to invoke the function. In contrast a normal function does not have a key and can be invoked anywhere within the function local scope.

  Researched answer:
A method is similar to a function, however, the difference is a method is stored in an object while a function is not. Furthermore, function can only work with the input arguments that we have provided while a method has access to the input arguments and properties of the associated object.


5. What is the difference between a class and an object?

  Your answer:
 A class is a blueprint to create objects while an object contains key, properties, and methods. The differences is a class has a constructor while an object does not. Another difference is a class is considered generic while an object is unique.


  Researched answer:
The difference between the two is the class is a blueprint for creating objects while an object is an instance of a class. 


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
  Hoisting is the behavior of javascript to move declared functions and variables, which are undesignated, to the top of the script. Furthermore, hoisting allows the coder to invoke functions while the function is declared below the invocation code within the script.

  Researched answer:
Before the execution of code, Javascript interpreter does the process of moving declaration of functions, variables, and classes to the top of their scope.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
The action of passing properties and methods from a parent class to the child class. In javascript the use of "extends" and "super()" allows the inheritence of properties and methods from a parent to child class.

2. React:
Is a javascript library for front-end that creates class and function components by using jsx(javascript xml). React combines html, javascript, and css to create components. The components generated in react are independent and generic. In react we can write html within javascript and render components to build websites, applications, etc. 

3. React state:
React state is an object within a React component that contains properties that may change, therefore, are not immutable. React tracks the object state properties and any changes to them. For class components, changes to state properties can be done by using setState(), which merges the changes to the properties. 

For hooks that are used in functional components, state can be any type of datatype that stores a single value. The state value in a hook can be changed by using useState() and a setState variable. In hooks, the state value is replaced and not merged, which is a contrast to a class component.

4. React lifecycle methods:
React has three lifecycle phases; mounting, updating, and unmounting. Common react lifecycle methods are render(), componentDidMount(), componentDidUpdate(), and componentWillUnmount(). The render() occurs in the mounting and updating phases of React. ComponentDidMount() occurs in the mounting phase of React. ComponentDidUpdate() occurs in the updating react lifecycle. ComponentWillUnmount() occurs in the unmounting phase of react.

5. DOM:
Document Object Model (DOM) is the structure of a web document. The DOM structures the document in a way that allows other programs to make changes to the document structure, style, and content. Other programs can interact with the web page because DOM represents the document as nodes and objects. 

The DOM structure of a document page consists of a document, which is the root node, and contains one child node the html element. The html element contains two children the head element and body element, which these elements have children of their own. 

