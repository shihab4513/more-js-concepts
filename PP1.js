// Practice Task - 1
// Ans : No : a
setTimeout(() => {
    console.log('I am Mokles . Kacha amer sade mister mango!~');
}, 5000);

// Ans : No : b

function delayGreeting(name, delayTime) {
    setTimeout(() => {
        console.log('Hello,', name + '!');
    }, delayTime);
}
delayGreeting('Alice', 2000);