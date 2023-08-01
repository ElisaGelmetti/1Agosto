import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent implements OnInit {
  registrationForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      password: ['', Validators.required],
      confermaPassword: ['', Validators.required],
      genere: ['', Validators.required],
      immagineProfilo: ['', Validators.required],
      biografia: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
}
