import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private BookUrl = environment.Url+'/api/books/'; // Update with your API URL
  private BorrowBookUrl = environment.Url+'/api/transactions/'; // Update with your API URL

  constructor(private http: HttpClient) {}
    // Get all books
    getAllBooks(): Observable<any[]> {
      return this.http.get<any[]>(this.BookUrl+'allbooks');
    }

      // Update a book & user
  updateBookUser(updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.BorrowBookUrl}borrowbook`, updatedData);
  }
}
