"use strict"
let switchDecider = +prompt("Bitte Task Nummer eingeben:", '');


switch(switchDecider){
    case 1:
        // The following function returns true if the parameter age is greater than 18.
        // Otherwise it asks for a confirmation and returns its result.
        // function checkAge(age) {
        //   if (age > 18) {
        //     return true;
        //   } else {
        //     return confirm('Did parents allow you)?';
        //   }
        // }
        // Rewrite it, to perform the same, but without if, in a single line.
        // Make two variants of checkAge:
        // Using a question mark operator ?
        // Using OR ||

        let age = 17;

        function checkAge(age){
            return (age > 18) ? true : confirm('Did parents allow you?');
        }
        alert(checkAge(age));
        let age2 = 17

        function checkAge2(age2){
            return (age2 > 18 || confirm('Did parents allow you?'))
        }
        alert(checkAge2(age2));
        break;
    case 2:
        // Write a function min(a,b) which returns the least of two numbers a and b.
        // For instance:
        // min(2, 5) == 2
        // min(3, -1) == -1
        // min(1, 1) == 1

        function min(a,b){
            if(a < b){
                return a;
            } else {
                return b;
            }
        }
        alert(min(10, 5));
        alert(min(8, 16));
        break;
    case 3:
        // Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
        // pow(3, 2) = 3 * 3 = 9
        // pow(3, 3) = 3 * 3 * 3 = 27
        // pow(1, 100) = 1 * 1 * ...* 1 = 1
        // Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
        // Run the demo
        // P.S. In this task the function should support only natural values of n: integers up from 1.
        
        function pow(x,n){
            let mult = x
            for(let i = 1 ; i < n; i++){
                x = x * mult;
            }
            return x;
        }
        let x = +prompt("X:",'');
        let n = +prompt("N:",'');
         if(n < 1) {
            alert(`Power ${n} is not supported`)
         } else {
            alert(pow(x, n));
         }
}