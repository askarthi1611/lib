import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  private UserApi = 'http://localhost:4000/api/users/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<any> {
    return this.http.get<any>(this.UserApi+'allmembers');
  }
}
