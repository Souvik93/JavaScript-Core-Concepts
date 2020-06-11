// Import stylesheets
import './style.css';


// call() Example
var obj = {name:"Souvik"};

var greeting = function(a,b,c){
    console.log("Hey There !! From My JS Starter");
    console.log("welcome "+this.name+" to "+a+" "+b+" in "+c);
};

// greeting(obj,'New Town','Kolkata') // Will throw name undefined error.


greeting.call(obj,'New Town','Kolkata','West Bengal');

//Demo with javascript .apply()

var object = {
  name: "Raja"
};

var welcomeMsg = function(a,b,c) {
  console.log("Hey There !! From My Method");
  console.log("Welcome "+this.name+" to "+a+" "+b+","+c);
};

var args = ["Newtown","KOLKATA","WB"]; 
welcomeMsg.apply(object,args); // Second Parameter Should Be Array.

//Use .bind() javascript kind of Hard Binding

var bindObject = {name: "Souvik Raja"};

var bindWelcome = function(a,b,c) {
  console.log("Hey There !! From .bind() Example");
  console.log("Hey "+this.name+" to "+a+", "+b+", "+c);
}

bindWelcome.bind(bindObject)('New Towm','Kolkata','Bengal');

// afterBind('New Towm','Kolkata','Bengal');


// this Concept Practice

var myMethod = function(city) {
  console.log("Hey There  !! From myMethod");
  console.log(this); // Should Print undefined if is in strict mode else it will print Window Object.
  console.log("Hey World !! I am from "+city);
}

var myObejects = {
  name: "Souvik Das",
  myMethod: myMethod
}

myMethod(); // It will refer global scope & it will print undefine.

myObejects.myMethod(); // Now it will refer to local scope 

// It will print {name: "Souvik Das", myMethod: ƒ};

// myMethod.bind(myObejects)() // Hard Binding.

// myMethod.call(myObejects); // Explicit Binding 

// myMethod.apply(myObejects,['India']);

/// myMethod.call(myObejects,'India');

myMethod.bind(myObejects)('India');

// References https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn

/*
https://www.codementor.io/@niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp
*/


function foo(a) {
  this.a = a;
}

 var meObj = new foo(2);

console.log('Hey There !! From New Binding Example');
console.log(meObj.a);


function foo(something) {
  this.a = something;
}


var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2 Since Hard Binding
console.log( baz.a ); // 3 Since New Binding


//  Array Sum

var arraySum = function() {
  var sum = 0;
  for(var i=0;i<this.length;i++) {
    sum += this[i];
  }


  console.log('Hey There !! From My Sum Method');
  console.log(sum);
}

// arraySum.call([2,4,8]);
var arr = [2,4,8];
arraySum.bind(arr)();
// arr.arraySum()
// [2,4,8].call(arraySum());

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
