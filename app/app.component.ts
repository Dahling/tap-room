import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h1>Tap Room</h1>
    <h3>{{appDescription}}</h3>
    <keg-list [childKegList]="masterKegList"></keg-list>
     <hr>
        <div>
        <div *ngIf="selectedKeg">
          <h3>{{selectedKeg.description}}</h3>
          <p>Keg Empty? {{selectedKeg.done}}</p>
          <h3>Edit Keg</h3>
          <label>Enter Keg Description:</label>
          <input [(ngModel)]="selectedKeg.description">
          <label>Enter Keg Priority (1-3):</label>
          <br>
          <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="selectedKeg.priority" [value]="3">3 (High Priority)
          <button (click)="finishedEditing()">Done</button>
         </div>
    </div>
  `
})

export class AppComponent {
  appDescription: string = 'This application tracks the level of various kegs in a tap room.';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

  masterKegList: Keg[] = [
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

    //this method defines selectedKeg as the Keg with the most recently clicked edit button
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg =  null;
  }

  // editKeg() {
  //   alert("You just requested to edit a Keg!");
  // }
}
