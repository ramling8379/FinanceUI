
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientCoreService {
  private readonly APIUrl = environment.baseURI + 'posts';

  constructor(private httpClient: HttpClient ) { }

  public get(url: string, options?: any): Observable<any> {
    return this.httpClient.get(url, options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  
  public post(url: string, data: any, options?: any): Observable<any> {
    return this.httpClient.post(url, data, options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  public put(url: string, data: any, options?: any): Observable<any> {
    return this.httpClient.put(url, data, options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.httpClient.delete(url, options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }
}