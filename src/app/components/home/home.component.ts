import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  figures=
  [
    {num:60,title:"Players"},
    {num:8,title:"Coachs"},
    {num:8,title:"Categories"},
    {num:3,title:"Stadium"}
  ]

  programs=
  [
    {icon:"assets/control.png",title:"Technical training",desc:"This type of training focuses on developing technical skills, such as dribbling, passing, shooting, and ball control"},
    {icon:"assets/control.png",title:"Tactical training",desc:"Tactical training focuses on developing the tactical awareness of the players, including positioning and movement off the ball."},
    {icon:"assets/control.png",title:"Physical training",desc:"Physical training aims to improve the player's physical fitness, including endurance, strength, speed, and agility."},
    {icon:"assets/control.png",title:"Mental training",desc:"Mental training is focused on developing the player's mental toughness, including their ability to stay focused ..."}
  ]

  cards = [
    {icon:"assets/control.png",type:"normal training",prix:"40 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"normal"},
    {icon:"assets/control.png",type:"Academy training",prix:"80 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"big"},
    {icon:"assets/control.png",type:"Summer training",prix:"100 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"normal"}
  ]
}

