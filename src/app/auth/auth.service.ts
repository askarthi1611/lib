import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/enviroment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.Url+'/api/auth/signin'; // Update with your API URL
  private RegUrl = environment.Url+'/api/auth/register'; // Replace with your actual API URL


  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }
    // Function to register a user
    registerUser(userData: any): Observable<any> {
      // Log user data for debugging
      console.log('User Data:', userData);
      // Make HTTP post request to register user
      return this.http.post<any>(this.RegUrl, userData).pipe(
        catchError(this.handleError) // Handle errors
      );
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
