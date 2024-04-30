import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserApi = 'http://localhost:4000/api/users/'; // Replace with your actual API URL
  private RegUrl = 'http://localhost:4000/api/auth/register'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Function to register a user
  registerUser(userData: any): Observable<any> {
    // Log user data for debugging
    console.log('User Data:', userData);
    // Make HTTP post request to register user
    return this.http.post<any>(this.RegUrl, userData).pipe(
      catchError(this.handleError) // Handle errors
    );
  }
  getAllMembers(): Observable<any> {
    return this.http.get<any>(this.UserApi+'allmembers');
  }
  deleteUser(deletedata: any): Observable<any> {
    let obj : any ={'_id':deletedata}
    return this.http.post<any>(this.UserApi+'deleteuser',obj);
  }
  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UserApi}/updateuser`, updatedData);
  }
  // Error handling function
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

