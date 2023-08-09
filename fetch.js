fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Retrieved data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
