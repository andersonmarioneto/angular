import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  //users: String[] = ['Anderson', 'Dedé', 'Edu', 'Marcia']

  users: User[] = [
    {nome: 'Anderson', idade: 22},
    {nome: 'Dedé', idade: 30},
    {nome: 'Edu', idade: 21},
    {nome: 'Marcia', idade: 19}
  ]
}
