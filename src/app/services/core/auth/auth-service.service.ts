import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string;
  constructor() { }

  getAuthToken() {
    return this.authToken;
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }
}
