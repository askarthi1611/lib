import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private BookUrl = 'http://localhost:4000/api/books/'; // Update with your API URL
  private BorrowBookUrl = 'http://localhost:4000/api/transactions/'; // Update with your API URL

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
