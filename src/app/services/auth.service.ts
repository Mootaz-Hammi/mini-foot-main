import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/angular-5.x';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  coachAuthentificated : boolean = false;
  addEvent : boolean = false;
  token :any=""
  
  constructor(private http:HttpClient,private cookie:CookieService) {

    


    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const coachAuthentificated = localStorage.getItem('coachAuthentificated');
    if (isAuthenticated) {
      this.isAuthenticated = JSON.parse(isAuthenticated);
    }
    if (coachAuthentificated) {
      this.coachAuthentificated = JSON.parse(coachAuthentificated);
    }
   }


   LoginPlayer(data:any):Observable<any>{
    
    return this.http.post<any>("http://localhost:7000/login",data)
   }
   SignupPlayer(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:7000/register",data)
   }
   getAllPlayers():Observable<any>{
    // this.token=JSON.parse(this.cookie.get("token"))
    // let headers = new HttpHeaders().set('Authorization','Bearer ' + this.token.token)
    return this.http.get("http://localhost:7000/getplayer");
   }

   LoginCoach(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:7000/logincoach",data)
   }

   SignupCoach(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:7000/registercoach",data)
   }

   addEvents(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:7000/addevent",data)
   }
}
