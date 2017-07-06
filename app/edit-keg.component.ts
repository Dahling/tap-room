import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.description}}</h3>
          <p>Keg Empty? {{childSelectedKeg.empty}}</p>
          <hr>
          <h3>Edit Keg</h3>
          <label>Enter Keg Description:</label>
          <input [(ngModel)]="childSelectedKeg.description">
          <label>Enter Keg Price (1-3):</label>
          <br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="1">1 (Low Price)<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="2">2 (Medium Price)<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="3">3 (High Price)
          <button (click)="emptyButtonClicked()">Empty</button>
         </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() emptyButtonClickedSender = new EventEmitter();

  emptyButtonClicked() {
      this.emptyButtonClickedSender.emit();
    }

}
