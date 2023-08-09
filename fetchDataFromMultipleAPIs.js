async function fetchDataFromMultipleAPIs() {
    try {
        const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('HTTP error in fetching data');
        }

        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        const combinedData = {
            todo: todoData,
            post: postData
        };

        console.log('Combined data:', combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and log the combined data
fetchDataFromMultipleAPIs();
