import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './Model/api-response';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  // baseUrl ='http://localhost';

  // login(loginData): Observable <ApiResponse>{
  //   return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
  // }
}

