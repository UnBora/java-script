// The function to fetch data from the API
async function fetchCatFact() {
    const apiUrl = 'https://catfact.ninja/fact';

    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json(); // Parse the JSON data
        document.getElementById('catFact').innerText = data.fact; // Display the fact in the paragraph
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        document.getElementById('catFact').innerText = 'Failed to fetch cat fact.';
    }
}

// Add an event listener to the button to trigger the fetch when clicked
document.getElementById('fetchButton').addEventListener('click', fetchCatFact);
