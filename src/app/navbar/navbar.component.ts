import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private token:string=""
  constructor(private http: HttpClient,private cookie:CookieService, private route:Router,private auth:AuthService){}
  Logedin :any
  ngOnInit(): void {
    console.log("onInit"+this.auth.isAuthenticated)
    // this.token=JSON.parse(this.cookie.get("token"))
    if(this.token){
    }
    
  }
  isFixedNavbar=false;

  @HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isFixedNavbar = scrollPosition > 50;
}
  // auth(){
  //   this.token=JSON.parse(this.cookie.get("token"))
  //   if(this.token){
    logouts() {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        this.auth.isAuthenticated=false
        localStorage.setItem('isAuthenticated', JSON.stringify(this.auth.isAuthenticated));
        this.auth.coachAuthentificated=false
        localStorage.setItem('coachAuthentificated', JSON.stringify(this.auth.coachAuthentificated));
        this.cookie.delete('token'); // delete the token cookie
        this.token = "";
        console.log("logout"+this.auth.isAuthenticated)
        // this.iamIn()
        this.route.navigateByUrl("/home")
    }
   
 
  
  iamIn(){
     return this.auth.isAuthenticated || this.auth.coachAuthentificated
  }
  
}
