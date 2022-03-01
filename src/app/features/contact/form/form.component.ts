import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from 'src/app/shared/person.service';
import { personInterface } from '../data/personInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  person: personInterface = {
    firstName: '',
    lastName: '',
  };

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.valid, 'submitted');
    this.personService.person.firstName = this.person.firstName;
    this.personService.person.lastName = this.person.lastName;
  }
}
