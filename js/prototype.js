// Prototype and Prototypal Inheritance in Javascript 

// Whenever we create a anything in js, js engine automatically attaches
// your object with hidden properties and functions
let arr = ["Rashika", "Anshita"];

let object = {
  name: "Rashika",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + this.city);
  }
}

function fun () {
  //
};

// Prototype chain
// ends up being null

// __proto__ is where js puts all the hidden methods eg. arr.__proto__.concat
// Prototype is just an object which is attached to any object,
// array or fn having these properties which can be accessed by using dot operator
// arr.__proto__ is Array.prototype, arr.__proto__.__proto__ is like Object.prototype and
// arr.__proto__.__proto__.__proto__ (end of chain) is null
// arr.__proto__ also has its own object like arr.__proto__.__proto__ having same objects as values

// object.__proto__ is Object.prototype and object.__proto__.__proto__ is null

// fun.__proto__ is Function.protoype, fun.__proto__.__proto__ it is equivalent to Object.prototype

// Anything in JS like array or function ends up being an object down in the prototype chain

let object2 = {
  name: "Anshita",
}

// Not advisable to assign value to object prototype
object2.__proto__ = object;
// The statement above will assign object value instead of Object.prototype and object values
// can be accessed by object2
// object2.name will print Anshita but object.city will print Delhi
// This is how object2 inherits properties & methods from object, this is prototypal inheritance
// If it does not find property in object2, it looks in the object

// The prototype of function will give all the functions access to the myBind function
Function.prototype.myBind = function () {
  console.log("Bind");
};

function some() {
  
}