import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Person } from './person';
import { PersonService } from './person.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  pageTitle: 'Person Details' | undefined;
  persondata$: Observable<Person[]> | undefined;
  errorMessage: any;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persondata$ = this.personService.getPersonDetails().pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  onAdd(): void {
    console.log('Not yet implemented');
  }
}
