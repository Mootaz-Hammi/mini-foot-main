import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(NavbarComponent)
  navbar!: NavbarComponent;
  token: any;
  constructor(private service:AuthService, private cookie:CookieService,private router:Router){}
  add(f:NgForm){
    this.service.LoginPlayer(f.value).subscribe((data:any)=>{
       this.cookie.set("token",JSON.stringify(data))
       this.cookie.set("emailUser",f.value.email)
       this.service.isAuthenticated=true
       localStorage.setItem('isAuthenticated', JSON.stringify(this.service.isAuthenticated));
      //  this.token=JSON.parse(this.cookie.get("token"))
       console.log(this.cookie.get("token"))
       this.router.navigateByUrl('/home')
      //  this.navbar.iamIn() 
    }
      );console.log("failed")
  }
}
