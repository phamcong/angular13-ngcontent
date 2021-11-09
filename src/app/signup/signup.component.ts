import { Component, OnInit } from '@angular/core';
import { IUser } from '../model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: IUser = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}
