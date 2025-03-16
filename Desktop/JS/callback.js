function displayMessage() {
    console.log("Hello, this is your callback message!");
}

function greetLater(callback) {
    console.log("Waiting for 3 seconds...");
    setTimeout(callback, 3000);
    // Call the callback function after 3 seconds
}

// Calling the function with the callback
greetLater(displayMessage);
//https://jsonplaceholder.typicode.com/users/1