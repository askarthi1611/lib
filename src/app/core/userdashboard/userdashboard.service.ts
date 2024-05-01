import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdashboardService {
  private userapi = 'http://localhost:4000/api/users/getuser/'; // Update with your API URL
  private BorrowBookUrl = 'http://localhost:4000/api/transactions/'; // Update with your API URL

  constructor(private http: HttpClient) {}
  
  getUser(userId: string): Observable<any> {
    return this.http.get<any>(this.userapi+userId);
  }
   // Update a book & user
   updateBookUser(updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.BorrowBookUrl}borrowbook`, updatedData);
  }
}
