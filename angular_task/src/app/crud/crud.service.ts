import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  Api_url="http://localhost:8000"


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) {}
  
GetWeather(cityName: any): Observable<any> {
      let API_URL = `${this.Api_url}/weather`;
      let data=this.httpClient.post(API_URL,cityName,this.httpOptions )
      return data
        .pipe(
          catchError(this.handleError)
        )
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Handle client error
        errorMessage = error.error.message;
      } else {
        // Handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
   
}


