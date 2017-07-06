import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';


//This informs Angular the code following it is meant to create a pipe.

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {

  transform(input: Keg[], desiredCompleteness) {
     var output: Keg[] = [];

     //only Keg objects with an empty property of true are added to the output array
     if(desiredCompleteness === "incompleteKegs") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].empty === false) {
           output.push(input[i]);
         }
       }
       return output;

       //If the user selected to view all Tasks, we simply return the input array containing all Task objects without filtering it

     } else if (desiredCompleteness === "completedKegs") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].empty === true) {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }


 }
