import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor() {}
  person = {
    firstName: '',
    lastName: '',
  };
}
