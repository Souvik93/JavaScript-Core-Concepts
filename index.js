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

var myMethod = function() {
  console.log("Hey There !! From myMethod");
  console.log(this); // Should Print undefined if is in strict mode else it will print Window Object.
}

var myObejects = {
  name: "Souvik Das",
  myMethod: myMethod
}

myMethod(); // It will refer global scope & it will print undefine.

myObejects.myMethod(); // Now it will refer to local scope 

// It will print {name: "Souvik Das", myMethod: ƒ};


// References https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn




const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
