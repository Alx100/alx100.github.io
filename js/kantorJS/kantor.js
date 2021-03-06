// 1.CALC
let propName1 = prompt("First prop name?");
let propName2 = prompt("Second prop name?");

let calculator = {
  read() {
      this[propName1] = +prompt('Write first number', '');
      this[propName2] = +prompt('Write second number', '');
  },
  sum() {
    return this[propName1] + this[propName2];
  },
  mul() {
    return this[propName1] * this[propName2];
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// or
var calculator2 = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

// with constructor
function Calculator() {
  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  }

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = + prompt('b?', 0);
  };

}

var calc = new Calculator();
calc.read();
alert(calc.mul());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.CLOSURE COUNTER
function makeCounter() {
  var currentCount = 0;
  
  return function(newValue) {
    if(newValue !== undefined) {
      currentCount = +newValue;
      return currentCount;
    }

    currentCount++;
    return currentCount;
  }
}

var counter = makeCounter();

alert(counter());  //1
alert(counter(5)); //5
alert(counter());  //6
alert(counter());  //7

//or return object with methods

function makeCounter2() {
  var currentCount = 0;

  return {
    getNext: function() {
      return ++currentCount;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 0;
    }
  };
}

var counter2 = makeCounter2();

alert(counter2.getNext()); //1
alert(counter2.getNext()); //2

counter.reset();
alert(counter2.getNext()); //1

// or add methods to function

function makeCounter3() {
  var currentCount = 0;
  
  function counter() {
    return ++currentCount;
  }

  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 0;
  };

  return counter;
}

var counter3 = makeCounter3();

alert(counter3()); //1 
alert(counter3()); //2

counter3.reset(); 
alert(counter3()); //1 

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. JS MODULES
// library for showing modals & dialogs

var MyWindowLibrary = (function() {
// init
var browserSupportNativeModalWindow = /*init*/

//inner function
function showModalBox(left, top, width, height){
  /* private */ 
}

// outer functions
function createMenu(options) {
  /* public */ 
  // browserSupportNativeModalWindow - accesing from closures
  // showModalBox() - accesing from closures
}

function createDialog(options) {
  /* public */ 
}

return {
  createMenu: createMenu,
  createDialog: createDialog
};

})();

// invoke
MyWindowLibrary.createMenu();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. STATIC VARIABLES либо через замыкание либо через свойство функции

var sayHi = (function() {

  var count = 0;// static variable
  
  return function() {
    count++;

    alert("Hi " + count);
  };

})();

sayHi(); //Hi 1
sayHi(); //Hi 2 

// or

function sayHi2() {
  sayHi2.count++;

  alert("Hi " + sayHi2.count);
}

sayHi.count = 0; //start value

sayHi2(); //Hi 1
sayHi2(); //Hi 2 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5.SUM WITH RECURSION
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2)(3)); //6

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//6.Func BUFFER WITH METHOD CLEAR
function makeBuffer() {
  let text = '';

  function buffer(piece) {
    if (arguments.length == 0) { //call without arguments
      return text;
    }
    text += piece;
  };

  buffer.clear = function() {
    text = "";
  };

  return buffer;
};

let buffer = makeBuffer();
buffer('blablabla')
buffer('blablabla2')
buffer('blablabla3')

alert(buffer())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//7. Decorator - BIND this
function bind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
}

let user = {
  login: 'Vasya',
  sayHi() {
    alert(this.login);
  }
};

setTimeout(bind(user.sayHi, user), 1000);

// or
// setTimeout(user.sayHi.bind(user), 1000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//8. Check type with [[Class]], access with {}.toString

function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

// getClass([1, 2, 3]) - 'Array'
// getClass(123) - 'Number'

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//9 Constructor with define properties
function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get() {
        return this.fullName.split(' ')[0];
      },
      set(newFirstName) {
        let lastName = this.fullName.split(' ')[1];
        return this.fullName = `${newFirstName} ${lastName}`; 
      }
    },
    lastName: {
      get() {
        return this.fullName.split(' ')[1];
      },
      set(newLastName) {
        let firstName = this.fullName.split(' ')[0];
        return this.fullName = `${firstName} ${newLastName}`; 
      }
    }
  });
}

let vasya = new User('Vasya Pupkun');

//read first,lastNames
alert(vasya.firstName);
alert(vasya.lastName);

// write to lastName
vasya.lastName = 'Sidorov';

alert(vasya.fullName);// Vasya Sidorov




