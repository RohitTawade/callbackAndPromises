function greetWithName(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Name not provided");
        }
    });
}

// Example usage
const name = "Mithun";

greetWithName(name)
    .then(greeting => {
        console.log(greeting);
    })
    .catch(error => {
        console.error(error);
    });
