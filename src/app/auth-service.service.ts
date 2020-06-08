import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private host = 'https://blad-e-auth.herokuapp.com';
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
      if (r.authority == 'USER') { return true; }
    }
    return false;

  }
  public getVoyageurs() {
    return this.http.get("https://blad-e.herokuapp.com/voyageurs");
  }
  
  
  
}
