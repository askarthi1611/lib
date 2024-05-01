import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private UserApi = environment.Url+'api/users/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}
  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UserApi}/updateuser`, updatedData);
  }
}
