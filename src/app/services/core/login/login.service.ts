import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientCoreService } from '../http-client/http-client-core.service';
import { GetApiEndPoints } from '../../endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpClientCoreService) {}

  public login(userName: string, password: string): Observable<any> {
    const loginData = {
      loginName: userName,
      password: password
    };
    const endPoint = GetApiEndPoints.login.getUrl();
    return this.httpService.post(endPoint, loginData);
  }
}
