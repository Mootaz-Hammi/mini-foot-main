import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private token:string=""
  constructor(private http: HttpClient,private cookie:CookieService, private route:Router){}
  Logedin :any
  ngOnInit(): void {
    
    this.token=JSON.parse(this.cookie.get("token"))
    if(this.token){
      this.Logedin=true
    }
    console.log("token"+this.token)
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
      
        this.cookie.delete('token'); // delete the token cookie
        this.token = "";
        this.Logedin=false
        this.iamIn()
        this.route.navigateByUrl("/home")
    }
    setToken(token: string) {
      this.cookie.set('token', token); // set the token cookie
      this.token = token;
    }
  // logouts() {
  //   // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  //   // this.http.post('/api/logout', { headers }).subscribe(() => {
      
  //     this.cookie.delete(this.token);
  //     this.Logedin=false
  //     this.token=JSON.parse(this.cookie.get("token"))
  //     this.cookie.delete(this.token)
  //     console.log(this.Logedin) // delete the token cookie
  //     // this.token = null;
  //   // });
  // }
  
  iamIn(){
    return this.Logedin
  }
  
}
