import { UserService } from './../shared/services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UserService) {
  }

  onSetToInactive(id: number) {
    this.userService.onAddInactiveUser(id);
  }

}
