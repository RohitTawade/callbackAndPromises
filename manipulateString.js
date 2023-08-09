function manipulateString(str, callback) {
    const manipulatedString = str.toUpperCase();
    callback(manipulatedString);
}

function logString(str) {
    console.log(`The manipulated string is: ${str}`);
}

manipulateString("Hello, World", logString);
