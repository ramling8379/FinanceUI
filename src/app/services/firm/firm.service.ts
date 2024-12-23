import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientCoreService } from '../core/http-client/http-client-core.service';
import { GetApiEndPoints } from '../endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class FirmService {
  constructor(private httpService: HttpClientCoreService) {}

  public getFirms(offset: any): Observable<any> {
    const endPoint = `${GetApiEndPoints.getFirm.getUrl()}/getPageList?offset=${offset}`;
    return this.httpService.get(endPoint);
  }

  public postFirms(payload: any): Observable<any> {
    const endPoint = GetApiEndPoints.getFirm.getUrl();
    return this.httpService.post(endPoint, payload);
  }

  public edirFirms(payload: { firmId: any }): Observable<any> {
    const endPoint = `${GetApiEndPoints.getFirm.getUrl()}/${payload.firmId}`;
    return this.httpService.put(endPoint, payload);
  }

  public deleteFirms(firmId: number): Observable<any> {
    const endPoint = `${GetApiEndPoints.getFirm.getUrl()}/${firmId}`;
    return this.httpService.delete(endPoint);
  }
}
