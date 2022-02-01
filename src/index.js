// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// const { checkInventory } = require('./library.js');
    // refactor above line to es6 syntax
import checkInventory from "./library.js";

console.clear();
console.log('init app...');



const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedVal) => {
	console.log(resolvedVal);
}
const handleFailure = (failedVal) => {
	console.log(failedVal);
}

checkInventory(order).then(handleSuccess, handleFailure);