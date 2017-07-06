//PARENT FILE

import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Inventory for {{month}}/{{day}}/{{year}}</h1>
    <h1>Tap Room</h1>
    <h3>{{appDescription}}</h3>
    <!--Keg List-->
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

    <hr>

    <!--Edit Kegs-->
    <edit-keg [childSelectedKeg]="selectedKeg" (emptyButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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

  addKeg(newKegFromChild: Keg) {
   this.masterKegList.push(newKegFromChild);
 }

}
