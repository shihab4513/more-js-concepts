function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    /*
    We know that if one line of code get error rest of the code dont execute. Here there is no variable called 'bBaria' but we are still trying to print it so it will naturally give error. but if we use try catch and if inside try any code give error then outside try bracket code will still execute . So if there is a chance that a code might give error we put it inside try catch function so their error dont affect rest of the code . 
    */

    try {
        // console.log(bBaria);
        const age = parseInt(ageText);
        // if age is not a number then throw throws the string at catch and catch catches it and shows it
        if (isNaN(age)) {
            throw 'Pleas enter a number';
        }
        if (age < 18) {
            throw 'Cant vote'
        }
        errorTag.innerHTML = '';

    } catch (error) {
        console.log('Error : ', error);
        errorTag.innerHTML = 'Error : ' + error;
    }
    finally {
        console.log('All done ');
    }
    /*
    finally is whether there is error or not inside try inside finally bracket the code must execute
    */
    console.log(1111111);
}