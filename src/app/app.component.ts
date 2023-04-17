import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { CookieService } from 'ngx-cookie-service';
import { CloudinaryImage } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cookie:CookieService){}
  token:any
  ngOnInit(): void {
    
    this.token=JSON.parse(this.cookie.get("token"))
    console.log(this.token)
    // console.log(this.cookie.get("emailUser"))
  }
  title = 'mini_foot';
}
