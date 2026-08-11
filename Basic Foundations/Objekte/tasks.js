"use strict"
let auswahl = +prompt("Bitte Task Nummer eingeben:", '');

switch(auswahl){
    case 1:
        // Write the code, one line for each action:

        // Create an empty object user.
        // Add the property name with the value John.
        // Add the property surname with the value Smith.
        // Change the value of the name to Pete.
        // Remove the property name from the object.

        let user = {
            name: "John",
            surname: "Smith",
        }
        alert(user.name + " " + user.surname)

        user.name = "Pete";
        alert(user.name)
        delete user.name;
        alert(user.name)
        break;
    case 2:
        // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
        // Should work like that:
         let schedule = {};
         alert( isEmpty(schedule) ); // true
         schedule["8:30"] = "get up";
         alert( isEmpty(schedule) ); // false

        function isEmpty(obj){
            for (let key in obj){
                return false;
            }
            return true;
        } break;
    case 3:
        //We have an object storing salaries of our team:
        let salaries = {
            John: 0,
            Ann: 0,
            Pete: 0
        }
        // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
        // If salaries is empty, then the result must be 0.
        let sum = 0;
        function getSalaries(obj){
            for(let key in obj){
                alert(key + ": " + salaries[key]);
                sum += salaries[key];
            } 
            return sum;
        }
        alert(getSalaries(salaries));
        break;
    case 4:
        // Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
        // For instance:
        // // before the call
        // let menu = {
        // width: 200,
        // height: 300,
        // title: "My menu"
        // };
        // multiplyNumeric(menu);
        // // after the call
        // menu = {
        // width: 400,
        // height: 600,
        // title: "My menu"
        // };
        
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };

        function multiplyNumeric(obj){
            for(let key in obj){
                if(typeof menu[key] == "number"){
                    menu[key] *= 2;
                };
            }
        }
        multiplyNumeric(menu)
        for( let key in menu){
            alert(key + ": " + menu[key])
        }
}