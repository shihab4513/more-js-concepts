// Practice Task - 2

function tellJoke() {
    console.log("Why don't scientist trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(() => {
    tellJoke();
}, 2000);

setTimeout(() => {

    clearInterval(jokeInterval);
    console.log('No more jokes');

}, 10000);