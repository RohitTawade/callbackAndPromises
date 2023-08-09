const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Retrieved data:', data);
        // You can process and display the data on the webpage here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Display the error message on the webpage
        document.getElementById('error-message').textContent = `An error occurred: ${error.message}`;
    });
