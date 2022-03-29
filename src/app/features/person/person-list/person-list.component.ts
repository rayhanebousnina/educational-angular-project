import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  pageTitle: 'Person Details' | undefined;
  person: Person[] = [];
  sub!: Subscription;
  errorMessage: any;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.sub = this.personService.getPersonDetails().subscribe({
      next: (person) => (this.person = person),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
