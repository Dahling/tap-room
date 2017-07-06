//this is the ROOT MODULE!
import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { KegListComponent} from './keg-list.component';

//this is the NgModule decorator
@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
//this is the declarations array
  declarations: [ AppComponent,
                  KegListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
