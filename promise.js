const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        }
        else {
            reject(success);
        }
    })
}


myLoader()
    .then(data => console.log('resolved data', data))
    .catch(error => console.log('rejected with value ', error));


/*
 
An object that represents a value that may not be available yet, but will be resolved or rejected in the future
*/