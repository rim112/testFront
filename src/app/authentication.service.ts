import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host = 'https://blad-e.herokuapp.com';
  private jwtToken: string;
  private roles: Array<any> = [];
  constructor(private http: HttpClient) {
  }
  login(user) {
    return this.http.post(this.host + '/login', user, { observe: 'response' });
  }
  register(user) {
    return this.http.post(this.host + '/users', user);
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  getTasks() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + '/tasks',
      { headers: new HttpHeaders({ 'Authorization': this.jwtToken }) });
  }

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') { return true; }
    }
    return false;

  }
  isUser() {
    for (let r of this.roles) {
      if (r.authority == 'USER') {
        return true;
      }
    }
    return false;
  }
  public getUsers() {
    return this.http.get('https://blad-e.herokuapp.com/eval');
  }

  public getUserByID(ideval) {
    return this.http.get('https://blad-e.herokuapp.com/eval/' + ideval);
  }

  public deleteUser(ideval) {
    return this.http.delete('https://blad-e.herokuapp.com/eval/' + ideval);
  }
  public doRegistration(user: User): Observable<User> {
    return this.http.post<User>('https://blad-e.herokuapp.com/eval', user);

  }

  }

