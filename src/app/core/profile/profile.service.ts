import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private UserApi = 'http://localhost:4000/api/users/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}
  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UserApi}/updateuser`, updatedData);
  }
}
