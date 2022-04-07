import { Injectable } from '@angular/core';

@Injectable()
export class ChangeBgService {
  constructor() {}
  changeBg(containerName: string) {
    let element = document.createElement('p');
    element.style.backgroundColor = 'red';
    element.innerText = 'Hello World';
    document.getElementById(containerName)?.appendChild(element);
  }
}
