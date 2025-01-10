import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api/user';

  constructor(private http: HttpClient) {}

  login(username: string, email: string, password: string): Observable<any> {
    const loginData = { username, email, password };
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  loginGet(username: string, email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('email', email)
      .set('password', password);
    return this.http.get(`${this.baseUrl}/login`, { params });
  }

  register(username: string, email: string, password: string): Observable<any> {
    const registerData = { username, email, password };
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

 
  registerGet(username: string, email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('email', email)
      .set('password', password);
    return this.http.get(`${this.baseUrl}/register`, { params });
  }

 
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

 
  createJournalEntry(journalData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/journal/create`, journalData);
  }

  getAllJournalEntries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/journal/all`);
  }
}