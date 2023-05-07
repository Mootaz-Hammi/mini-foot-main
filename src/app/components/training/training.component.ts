import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface Player {
  image : string
  name : string
  position : string

}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  dataArray:any
  constructor(private service:AuthService,private http:HttpClient){
  //  this.http.get('http://localhost:7000/getplayer').subscribe(data=>this.dataArray=data)
  this.http.get('http://localhost:7000/getplayer').subscribe(data=>console.log(data))
  this.http.get<any>('http://localhost:7000').subscribe(data=>console.log(data))
  }
  ngOnInit() {
    // this.service.getAllPlayers().subscribe((data:any[])=>{
      
    //   console.log(data)
    // })  
  }

  players: Player[] = [
    {image:"assets/top.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/bw.jpg", name: 'Naoures Chaouachi', position: 'Middle Center'},
    {image:"assets/cap.jpg", name: 'Mortadha Aouadi', position: 'Attacker'},
    
    {image:"assets/ops.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/jump.jpg", name: 'Ghaith Abidi', position: 'Middle Center'},
    {image:"assets/cap.jpg", name: 'Mohanned Chebbi', position: 'Attacker'},

    {image:"assets/top.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/bw.jpg", name: 'Naoures Chaouachi', position: 'Middle Center'},
    {image:"assets/cap.jpg", name: 'Mortadha Aouadi', position: 'Attacker'},
    
    {image:"assets/ops.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/jump.jpg", name: 'Ghaith Abidi', position: 'Middle Center'},
    {image:"assets/cap.jpg", name: 'Mohanned Chebbi', position: 'Attacker'}
  ];
coachAuthentificated(){
  return this.service.coachAuthentificated;
}
}
