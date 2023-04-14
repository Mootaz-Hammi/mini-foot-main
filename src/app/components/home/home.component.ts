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

  cards = [
    {icon:"assets/control.png",type:"normal training",prix:"40 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"normal"},
    {icon:"assets/control.png",type:"normal training",prix:"40 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"big"},
    {icon:"assets/control.png",type:"normal training",prix:"40 DT",nbrheure:"4 heures(1 mois)",offre1:"consultation gratuite",offre2:"access to the community",size:"normal"}
  ]

  eleves = [
    {name:"yassin",age:"14"},
    {name:"mootaz",age:"14"},
    {name:"ilyes",age:"14"}
  ]

}
function saveeleve() {
  alert("yassin");
}

