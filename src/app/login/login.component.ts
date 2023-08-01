import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // Implementa qui la logica per gestire il submit del form (autenticazione, etc.)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
