// Throttling and debouncing give us control over the rate at which a function is called.
// Limit no. of calls for performance optimization

// Debouncing in JS
// only make a call if the difference between 2 events is of a certain limit like 300 ms in this case
// the function call is made when the user pauses for a certain time
// In this case, if time difference between 2 key press events
// is more than 300ms only then function is triggered
let counter = 0;

const getData = () => {
  // gets called on each stroke without debounce method
  console.log('Fetching Data ..', counter++);
}

const debouncing = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  }
}

const betterFn = debouncing(getData, 300);

// Throttling in JS
// only make a call after a certain amount of time
// first call is made and then next call is after 300 ms
// difference between 2 calls is 300ms only then make a call
const expensive = () => {
  console.log('expensive');
}

const throttle = (fn, limit) => {
  // closure to avoid reinitializing of variable
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      // fn();
      // to add arguments from main fn
      fn.apply(context, args);

      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  }
};

const betterExpensiveFn = throttle(expensive, 1000)

window.addEventListener("resize", betterExpensiveFn);


// Example of call, apply, bind
let name = {
  firstname: 'Rashika',
  lastname: 'Hali',
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printFullName();

let name2 = {
  firstname: 'Another',
  lastname: 'Name',
}

// CALL
// function borrowing, borrow fns from other object and use with data from other object
// first arg is reference or what we want this to be pointing to
// invoke a fn directly
name.printFullName.call(name2)

// take the fn out instead of keeping inside an object
let printFullN = function (hometown, state) {
  console.log(this.firstname + " " + this.lastname + hometown + state);
};

// later argument can be args to the function
printFullN.call(name, 'Mumbai', 'Maharashtra');

// APPLY
// apply method almost same as call
// only difference between call and apply is passing arguments
// for apply, pass arguments in array as second argument
printFullN.apply(name, ['Mumbai', 'Maharashtra']);

// BIND
// bind method almost as call
// difference is instead of directly calling it binds the method with object and returns copy of the method
// returns a function which can be called later
let printMyName = printFullN.bind(name, 'Mumbai', 'Maharashtra');
// prints a function
console.log(printMyName);
// invoked later
printMyName();

// Polyfill for bind method
// kind of browser fallback
// to write our own bind function in case bind is not available

let nm = {
  fn: 'RR',
  ln: 'HH',
};

let printName = function (hometown, state) {
  console.log(this.fn + this.ln + hometown + state);
};

let printNN = printName.bind(nm, 'Dehradun');
printNN('Uttrakhand');

Function.prototype.mybind = function (...args) {
  // we wanted to access the fn on which we are calling bind
  // the this variable is that fn
  let obj = this;
  // slices the first element from the array
  params = args.slice(1);
  // param=args.slice(1).toString();
  // bind fn returns a function
  return function (...args2) {
    // param2=args2.toString();
    //obj.apply(args[0],[...param,...args2]);
    // we needed to access the arguments
    // obj.call(args[0], params);
    // as the arguments are in array syntax only
    // concatenating both the array arguments
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printNN2 = printName.mybind(nm, 'Dehradun');
printNN2('Uttrakhand');

// FUNCTION CURRYING
// currying is the technique of converting a function that takes multiple arguments
// into a sequence of functions that each take a single argument.
// by using bind
let multiply = function (x, y) {
  console.log(x * y);
}

// same like below
// let multiplyByTwo = function (y) {
//   let x = 2;
//   console.log(x * y);
// }

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // output is 10

multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5); // output is 6, ignores 5 and takes 2 and 3 as x and y

multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); // output is 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // output 15

// by using closure
// closure: when a new fn is returned, the fn has access to x variable even after returning
// x will be preset to particular value which can be used in the fn
multiply = function (x) {
  return function (y) {
    console.log(x * y);
  }
}

let multiplyByFour = multiply(4);
multiplyByFour(3); // output is 12

