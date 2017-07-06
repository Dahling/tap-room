
//This imports component code from the Angular framework
import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';
//This is the component decorator, which tells Angular that we're creating a new component
@Component({
  selector: 'keg-list',
  template: `
  <ul>
     <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.description}} <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
   </ul>
  `
})

//This is a class declaration, sometimes referred to as the "back-end" of the component, to handle behavior.
//Methods, property definitions, or other functionality will reside here.
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      alert("This keg is empty!");
    } else {
      alert("This keg is not empty. Better get to work!");
    }
  }

  //this method assigns different colors to each price category
  priceColor(currentKeg){
    if (currentKeg.price === 3){
      return "bg-danger";
    } else if (currentKeg.price === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
