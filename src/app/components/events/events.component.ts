import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  text=""
  phone=""
  password=""
test(){
  alert(this.phone)
}
register(){
  alert(this.password)
}
verifphone(){
  alert(this.phone);
}
}
