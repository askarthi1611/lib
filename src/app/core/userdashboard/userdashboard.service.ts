import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdashboardService {
  private userapi = 'http://localhost:4000/api/users/getuser'; // Update with your API URL

  constructor(private http: HttpClient) {}
  getUser(userid: any): Observable<any> {
    let obj : any ={'_id':userid}
    return this.http.get<any>(this.userapi,obj);
  }
}
