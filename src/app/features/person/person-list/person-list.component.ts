import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  catchError,
  EMPTY,
  fromEvent,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { ChangeBgService } from './change-bg.service';
import { Person } from './person';
import { PersonService } from './person.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements AfterViewInit, OnInit, OnDestroy {
  pageTitle: 'Person Details' | undefined;
  persondata$: Observable<Person[]> | undefined;
  errorMessage: any;
  @ViewChild('btn', { static: true }) btn: ElementRef | undefined;
  constructor(private _changebg: ChangeBgService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.onChangeClick();
  }
  onChangeClick(): void {
    fromEvent(this.btn?.nativeElement, 'click').subscribe((res) => {
      console.log('res', res);
      this._changebg.changeBg('mydiv');
    });
  }
  ngOnDestroy() {
    // this.changeText$.unsubscribe();
  }
}
