import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { CookieService } from 'ngx-cookie-service';
import { CloudinaryImage } from '@cloudinary/angular-5.x';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cookie:CookieService,private auth:AuthService){
    
  }
  token:any
  ngOnInit(): void {
   
    this.token=JSON.parse(this.cookie.get("token"))
    console.log(this.token.token)
    
    // console.log(this.cookie.get("emailUser"))
  }
  title = 'mini_foot';
}
