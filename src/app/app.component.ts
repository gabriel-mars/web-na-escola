import { Component } from '@angular/core';
import { User } from './models/user.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NaEscola';

  user: User;

  mostrarComponente: boolean = false;
  mostrarLogin: boolean = true;

  constructor(
    private loginService: LoginService
    ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario'));

    if (this.user != null) {
      this.mostrarComponente = true;
      this.mostrarLogin = false;
      this.loginService.fazerLogin(this.user);
    } else {
      this.loginService.mostrarComponentesEmitter.subscribe(
        show => this.mostrarComponente = show
      );
  
      this.loginService.mostrarLoginEmitter.subscribe(
        show => this.mostrarLogin = show
      );
    }
  }
}
