import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
interface Match {
  logo:string
  logo2:string
  team1 : string
  team2 : string
  time : string
  date:string
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {
  constructor(private auth:AuthService,private cookie:CookieService){

  }
  text=""
  phone=""
  password=""
  Matchs:Match[]=[
    {logo:"assets/logo.png",logo2:"assets/logo.png",team1:"Mootez",team2:"Naoures",time:"13:10",date:"20/20/2020"},
    {logo:"assets/logo.png",logo2:"assets/logo.png",team1:"taraji",team2:"club",time:"13:10",date:"20/20/2020"},
    {logo:"assets/logo.png",logo2:"assets/logo.png",team1:"etoile",team2:"sfax",time:"13:10",date:"20/20/2020"},
  ];

CoachEvent(){
  return this.auth.coachAuthentificated;
}
Event(){
 this.auth.addEvent = !this.auth.addEvent
}
EventClicked(){
  return this.auth.addEvent
}

addEvent(f:NgForm){
  console.log("xx")
  console.log(f.value);
  this.auth.addEvents(f.value).subscribe((data:any)=>{    
    console.log(data)
    

    }),
  (error:any)=>{console.log(error)}
}
}
