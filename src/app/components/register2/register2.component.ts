import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  constructor(private auth:AuthService,private route:Router,private cookie:CookieService){

  }

defaultSection="Select Experience"
experiences:string[]= ['Select Experience','1','2','3','4 et plus']

  add(f2:NgForm){
    this.auth.SignupCoach(f2.value).subscribe((data:any)=>{
       console.log("date"+ data)
      this.route.navigateByUrl("/");
      this.auth.coachAuthentificated=true
      localStorage.setItem('coachAuthentificated', JSON.stringify(this.auth.coachAuthentificated));
      
      this.auth.isAuthenticated=true
      localStorage.setItem('isAuthenticated', JSON.stringify(this.auth.isAuthenticated));
   
    })
  }

}
