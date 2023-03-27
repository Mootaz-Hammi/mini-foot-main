import { Component } from '@angular/core';

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

}
