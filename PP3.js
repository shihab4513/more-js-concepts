async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        if (data.joke) {
            console.log(data.joke);
        } else {
            console.log("No joke found. API response:", data);
        }
    } catch (error) {
        console.error("Error fetching joke:", error.message);
    }
}

fetchJoke();
