import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl = "http://localhost:8080/api-na-escola/user";
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  usuario: User;

  aux: User = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    tipoUsuario: null
  }

  mostrarComponentesEmitter = new EventEmitter<boolean>();
  mostrarLoginEmitter = new EventEmitter<boolean>();

  private permissaoUsuario = new BehaviorSubject<boolean>(false);
  
  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpClient
  ) { }

  readByEmail(usuario: User): Observable<User> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<User>(url, usuario, {headers: this.headers}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  fazerLogin(usuario: User): void {
    this.mostrarComponentesEmitter.emit(true);
    this.mostrarLoginEmitter.emit(false);

    this.toastService.showMessage('Autenticado!', true);

    usuario.senha = '';
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['/home']);
  }

  getPermissaoUsuario() {
    this.aux = JSON.parse(localStorage.getItem('usuario'));

    // if(this.aux.isAdm == true) {
    //   this.permissaoUsuario.next(true);
    // }

    return this.permissaoUsuario.asObservable();
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Dados incorretos!', false);
    return EMPTY;
  }
}
