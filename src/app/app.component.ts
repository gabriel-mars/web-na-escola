import { EncryptService } from './services/encrypt.service';
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
    private loginService: LoginService,
    private encryptService: EncryptService
    ) {}

  ngOnInit(): void {
    const obj = sessionStorage.getItem('usuario');
    this.user = JSON.parse(JSON.stringify(this.encryptService.decrypt(obj)));

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
