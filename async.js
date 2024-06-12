console.log(1);
console.log(2);
/*
setTimeout(doSomething,4000);
Above code means run this code after 4000 milli second
*/
// setTimeout(doSomething,4000);
setTimeout(() => {
    console.log('lazy dog!');
}, 4000)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}
/*
JS is naturally single threaded. synchronous means one after another,
Asynchronous means everyone at their own pace. 
setTimeout() is asynchronous. because it hamper one after another process
*/