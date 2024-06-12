console.log(1);
console.log(2);
// setTimeout(()=>{
//     console.log(3);
// })
// setTimeout execute just one time
// setTimeout(() => {
//     console.log(3);
// }, 4000);

console.log(4);
console.log(5);
console.log(6);
let num = 0;
console.log('***********************************************');
// setInterval(() => {

//     console.log(num);
//     num++;
// }, 2000);
// above setInterval code means after every 2000 ml sec num will be printed over and over again


const clockID = setInterval(() => {

    if (num > 6) {
        clearInterval(clockID);
    }
    // above condition will force the function to stop after printing 7.When num become 7 the code will stop  

    console.log(clockID, num);
    num++;
}, 2000);

