import { CounterService } from './counter.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private counterService: CounterService) { }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeUserAdded = new EventEmitter<string>();
  inactiveUserAdded = new EventEmitter<string>();

  onAddActiveUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.logChangesQuantity();
  }

  onAddInactiveUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.logChangesQuantity();
  }
}
