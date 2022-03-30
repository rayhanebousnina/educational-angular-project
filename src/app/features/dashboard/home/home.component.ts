import {
  Component,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnInit,
} from '@angular/core';

import { PersonsService } from 'src/app/shared/person.service';

// import { SohoDragDirective } from 'ids-enterprise-ng';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // echarts
  public options: any;
  public firstName = '';
  public lastName = '';

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.firstName = this.personService.person.firstName;
    this.lastName = this.personService.person.lastName;
  }
}
