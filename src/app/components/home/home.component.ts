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
    {icon:60,title:"Strength Training",desc:"description1"},
    {icon:70,title:"Strength Training",desc:"description2"},
    {icon:80,title:"Strength Training",desc:"description3"},
    {icon:60,title:"Strength Training",desc:"description1"}
  ]
}
