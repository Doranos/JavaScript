//Basic Framework for small Tasks Going formward: switch statment with the task content in the code block and a prompt to decide which 'script' to excecute
"use strict"
let switchDecider = +prompt("Bitte Task Nummer eingeben:", '');


switch(switchDecider){
    case 1:
        // Use the for loop to output even numbers from 2 to 10.

        for (let i = 1; i <= 10; i++){ // Staring i from 0 makes no sense since we want to start the alerts with 2
            if (i % 2 == 0) {
                alert(i);
            }
        } break;

    case 2:
        //Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).  

        for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
        }
        let i = 0 
        while(i < 3){
            alert( `number ${i}!` );
            i++;
        }break;

    case 3:
        // Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
        // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
        // Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

        let num;
        do{
            num = +prompt("Input a number greater than 100:", 0);
            if (!num) break;
        }while(num <= 100)
        break;

    case 4:
        // An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
        // In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
        // For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
        // Write the code which outputs prime numbers in the interval from 2 to n.
        // For n = 10 the result will be 2,3,5,7.
        // P.S. The code should work for any n, not be hard-tuned for any fixed value.

        let n = +prompt("Up to where should the prime number Check run?:", 0)
        NextPrime: for(let i = 2; i <= n; i++){ //we check every number between 2 and n
            for(let j = 2; j < i ;j++){ // we check if the current i number can be evenly divided by anything else than 1 and n, the first step checks j=2 < i=2, 
                                        // giving out a false and outputs i without checking the code block
                if(i % j == 0) continue NextPrime;  // example 4, 6 and 9: 4 and 6 checks % against 2 and delivers 0 causing the continue to jump to the 
                                                    // next n iteration, 9 checks % against 2 and outputs 1, the for loop increments 2 to 3 and checks % again
                                                    // this time 9%3 gives 0 so the n iteration jumps to 10 
            } alert(i);
        }break;
        
}