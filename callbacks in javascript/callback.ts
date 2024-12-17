function processUserInput(callback) {
    const name = prompt("Enter your name:");
    callback(name); // Invoke the callback function
}

function greet(name) {
    alert(`Hello, ${name}!`);
}

// Pass `greet` as the callback to `processUserInput`
processUserInput(greet);
