import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: String[] = ['Anderson', 'Dedé', 'Edu', 'Users']
}
