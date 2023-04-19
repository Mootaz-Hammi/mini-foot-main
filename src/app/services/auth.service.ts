import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  coachAuthentificated : boolean = true;

  
  constructor(private http:HttpClient) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      this.isAuthenticated = JSON.parse(isAuthenticated);
    }
   }

   LoginPlayer(data:any):Observable<any>{
    
    return this.http.post<any>("http://localhost:7000/login",data)
   }
   SignupPlayer(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:7000/register",data)
   }
   getAllPlayers(){
    return this.http.get("http://localhost:7000/getplayercrud")
   }
}
