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
    {icon:"assets/control.png",title:"Force",desc:"description2description2description2descrip"},
    {icon:"assets/control.png",title:"Strength Training",desc:"description2description2description2descrip"},
    {icon:"assets/control.png",title:"Strength Training",desc:"description2description2description2descrip"},
    {icon:"assets/control.png",title:"Strength Training",desc:"description2description2description2descrip"}
  ]
}
