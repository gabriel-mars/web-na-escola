import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Aluno } from './../models/aluno.model';
import { ToastService } from './toast.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escola } from '../models/escola.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl = "http://localhost:8080/api-na-escola/aluno";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  cadastrarAluno(aluno: Aluno, hash: string): Observable<Aluno> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    return this.http.post<Aluno>(this.baseUrl, aluno, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(hash: string): Observable<Aluno[]> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/escola`;
    return this.http.get<Aluno[]>(url, {headers: this.headers, params: this.params});
  }

  readByEscola(hash: string, escola: Escola): Observable<Aluno[]> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/escola/${escola.id}`;
    return this.http.get<Aluno[]>(url, {headers: this.headers, params: this.params});
  }

  readById(id: number, hash: string): Observable<Aluno> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Aluno>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(aluno: Aluno, hash: string): Observable<Aluno> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    return this.http.put<Aluno>(this.baseUrl, aluno, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, hash: string): Observable<Boolean> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Aluno>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Não foi possível completar a ação.', false);
    return EMPTY;
  }
}
