import { Component } from '@angular/core';
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
export class TrainingComponent {
  dataArray:any
  constructor(private service:AuthService){
    this.service.getAllPlayers().subscribe(data=>this.dataArray=data)
  }

  players: Player[] = [
    {image:"assets/top.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/bw.jpg", name: 'Steph Curry', position: 'Point Guard'},
    {image:"assets/cap.jpg", name: 'Kevin Durant', position: 'Power Forward'},
    
    {image:"assets/ops.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/jump.jpg", name: 'Steph Curry', position: 'Point Guard'},
    {image:"assets/cap.jpg", name: 'Kevin Durant', position: 'Power Forward'},

    {image:"assets/top.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/bw.jpg", name: 'Steph Curry', position: 'Point Guard'},
    {image:"assets/cap.jpg", name: 'Kevin Durant', position: 'Power Forward'},

    {image:"assets/top.jpg", name: 'Mootez Hammi', position: 'Right Back'},
    {image:"assets/bw.jpg", name: 'Steph Curry', position: 'Point Guard'},
    {image:"assets/cap.jpg", name: 'Kevin Durant', position: 'Power Forward'}
  ];
coachAuthentificated(){
  return this.service.coachAuthentificated;
}
}
