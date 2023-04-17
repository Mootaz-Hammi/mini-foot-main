import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

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
