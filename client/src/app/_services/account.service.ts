import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseUrl = 'https://localhost:5001/api/';

  login(model: any, userLoginString: String) {
    return this.http
      .post<User>(this.baseUrl + 'account/login' + userLoginString, model)
      .pipe(
        map((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser.set(user);
          }
        })
      );
  }

  register(model: any, userLoginString: String) {
    return this.http
      .post<User>(this.baseUrl + 'account/register' + userLoginString, model)
      .pipe(
        map((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser.set(user);
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
