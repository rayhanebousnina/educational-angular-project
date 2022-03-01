import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { personInterface } from '../data/personInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  person: personInterface = {
    firstName: 'Rayhane',
    lastName: 'Bousnina',
  };

  constructor( private sharedService:SharedService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.valid, 'submitted');
    this.sharedService.name=this.person.firstName;
    this.sharedService.lastName=this.person.lastName
  }
}
