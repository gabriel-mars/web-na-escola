import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Professor } from './../models/professor.model';
import { ToastService } from './toast.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl = "http://localhost:8080/api-na-escola/professor";
  params = new HttpParams();
  headers = new HttpHeaders()
    .set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  cadastrarProfessor(professor: Professor, hash: string): Observable<Professor> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    return this.http.post<Professor>(this.baseUrl, professor, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(hash: string): Observable<Professor[]> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/escola`;
    return this.http.get<Professor[]>(url, {headers: this.headers, params: this.params});
  }

  readById(id: number, hash: string): Observable<Professor> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Professor>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(professor: Professor, hash: string): Observable<Professor> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    return this.http.put<Professor>(this.baseUrl, professor, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number, hash: string): Observable<Boolean> {
    this.params = new HttpParams();
    this.params = this.params.set('hash', hash);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Professor>(url, {headers: this.headers, params: this.params}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.toastService.showMessage('Não foi possível completar a ação.', false);
    return EMPTY;
  }
}
