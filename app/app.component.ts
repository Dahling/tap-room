import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>{{appDescription}}</h3>
    <ul>
       <li [class]="priceColor(currentKeg)" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.description}} <button (click)="editKeg()">Edit!</button></li>
     </ul>
  </div>
  `
})

export class AppComponent {
  appDescription: string = 'This application tracks the level of various kegs in a tap room.';
  kegs: Keg[] = [
    new Keg('IPA', 3),
    new Keg('Porter', 3),
    new Keg('Hefe', 2),
    new Keg('Brown Ale', 1),
    new Keg('Pale Ale', 2),
    new Keg('Pilsner', 2),
    new Keg('Lager', 1),
    new Keg('PBR', 3),
    new Keg('Stout', 3)
  ];

  priceColor(currentKeg){
    if (currentKeg.price === 3){
      return "bg-danger";
    } else if (currentKeg.price === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editKeg() {
    alert("You just requested to edit a Task!");
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      alert("This keg is empty!");
    } else {
      alert("This keg is not empty. Better get to work!");
    }
  }

}




export class Keg {
  public empty: boolean = false;
  constructor(public description: string, public price: number) {   }
}
