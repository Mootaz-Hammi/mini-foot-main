import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  token:any;
  constructor(private service:AuthService,private cookie:CookieService,private route:Router){}

    add(f2:NgForm){
      this.service.LoginCoach(f2.value).subscribe((data:any)=>{
        this.cookie.set("token",JSON.stringify(data))
        console.log(this.cookie.get("token"))
        this.route.navigateByUrl('/')
        this.cookie.set("emailUser",f2.value.email)

        this.service.coachAuthentificated=true
        localStorage.setItem('coachAuthentificated', JSON.stringify(this.service.coachAuthentificated));
        
      //   this.service.coachAuthentificated=true
      //   localStorage.setItem('coachAuthentificated', JSON.stringify(this.service.coachAuthentificated));
      //  //  this.token=JSON.parse(this.cookie.get("token"))
        
        
       //  this.navbar.iamIn() 
     }
       );console.log("failed")
    }
  }


