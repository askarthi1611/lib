import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  private UserApi = environment.Url+'/api/users/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<any> {
    return this.http.get<any>(this.UserApi+'allmembers');
  }
}
