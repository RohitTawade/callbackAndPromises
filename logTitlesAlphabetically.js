function logTitlesAlphabetically(titles) {
    titles.sort(); // Sort the titles in alphabetical order
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

function extractTitlesAndCallCallback(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles);
}

const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
];

extractTitlesAndCallCallback(books, logTitlesAlphabetically);
