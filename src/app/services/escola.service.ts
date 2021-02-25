import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Escola } from './../models/escola.model';
import { ToastService } from './toast.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  baseUrl = "http://localhost:8080/api-na-escola/escola";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  cadastrarEscola(fonte: Escola, hash: string): Observable<Escola> {
    this.params = this.params.set('hash', hash);
    return this.http.post<Escola>(this.baseUrl, fonte, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(hash: string): Observable<Escola[]> {
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/user`;
    return this.http.get<Escola[]>(url, {headers: this.headers, params: this.params});
  }

  readById(id: number, hash: string): Observable<Escola> {
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Escola>(url, {headers: this.headers}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(escola: Escola, hash: string): Observable<Escola> {
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${escola.id}`;
    return this.http.put<Escola>(url, escola, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, hash: string): Observable<Boolean> {
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Escola>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Não foi possível completar a ação.', false);
    return EMPTY;
  }
}
