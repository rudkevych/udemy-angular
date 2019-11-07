import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  constructor() { }

  logChangesQuantity() {
    console.log(`Users status was changed ${++this.counter} times`);
  }
}
