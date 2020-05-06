import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
    users;
  constructor(private userService: UserService) {
      this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit() {}

}
