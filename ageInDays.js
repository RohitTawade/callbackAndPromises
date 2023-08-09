function ageInDays(person, callback) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365; // Approximation for simplicity

    return function logResult() {
        const message = `The person's full name is ${fullName}, and their age in days is ${ageInDays}.`;
        callback(message);
    };
}

function logMessage(message) {
    console.log(message);
}

const person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20
};

const logResult = ageInDays(person, logMessage);
logResult(); // Output:
