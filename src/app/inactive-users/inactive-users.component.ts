import { UserService } from './../shared/services/user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onAddActiveUser(id);
  }
}
