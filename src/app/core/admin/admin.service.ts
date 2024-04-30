import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:4000/api/books/'; // Update with your API URL

  constructor(private http: HttpClient) {}
  // Create a new book
  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'addbook', book);
  }

  // Get all books
  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'allbooks');
  }

  // Get a single book by ID
  getBookById(bookId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}getBookById`);
  }

  // Update a book
  updateBook(bookId: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}updateBook`, updatedData);
  }

  // Delete a book
  deleteBook(bookId: any): Observable<any> {
    let obj : any ={'_id':bookId}
    return this.http.post<any>(`${this.apiUrl}removebook`,obj);
  }
}
