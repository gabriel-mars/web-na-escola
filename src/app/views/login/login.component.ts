import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarLogin: boolean = true;
  hide = true;

  user: User = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    tipoUsuario: null
  }

  aux: User = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    tipoUsuario: null
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  resourcesLoaded = true;

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.resourcesLoaded = false;
    localStorage.clear();
    this.loginService.readByEmail(this.user).subscribe((aux) => {
      const newUser: User = aux;

      this.loginService.fazerLogin(newUser);
      this.resourcesLoaded = true;
    });
    this.resourcesLoaded = false;
  }
}
