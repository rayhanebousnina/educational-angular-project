import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './person-list/person-list.component';
@NgModule({
  declarations: [PersonListComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
})
export class PersonModule {}
