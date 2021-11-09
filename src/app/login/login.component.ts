import { Component, OnInit } from '@angular/core';
import { IUser } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}
