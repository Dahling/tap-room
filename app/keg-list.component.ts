
//This imports component code from the Angular framework
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Keg } from './keg.model';
//This is the component decorator, which tells Angular that we're creating a new component
@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Completed Kegs</option>
      <option value="incompleteKegs" selected="selected">Incomplete Kegs</option>
    </select>

    <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.description}} {{currentKeg.price}}
        <input *ngIf="currentKeg.empty === true" type="checkbox" checked (click)="toggleEmpty(currentKeg, false)"/>
        <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleEmpty(currentKeg, true)"/>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </li>
    </ul>
})

    filterByCompleteness: string = "incompleteKegs";

 //This is a class declaration, sometimes referred to as the "back-end" of the component, to //handle behavior.
// Methods, property definitions, or other functionality will reside here.

toggleDone(clickedKeg: Keg, setCompleteness: boolean) {
     clickedKeg.done = setCompleteness;
   }

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      alert("This keg is empty!");
    } else {
      alert("This keg is not empty. Better get to work!");
    }
  }

  //this method assigns different colors to each price category

  priceColor(keg: Keg){
    if (currentKeg.price === 3){
      return "bg-danger";
    } else if (currentKeg.price === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
