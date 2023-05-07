import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
interface Player {
  image : string
  name : string
  categorie : string

}

@Component({
  selector: 'app-elite',
  templateUrl: './elite.component.html',
  styleUrls: ['./elite.component.css'],

  styles: [`
  .ecole {
    color: green;
    
  }
  .minime {
    color: red;
  }
  .cadet {
    color: blue;
  }
`]
})
export class EliteComponent {
  categories: string[] = ['ecole', 'minime', 'cadet', 'junior'];
  selectedCategorie: string = '';

  BestPlayers:Player[]=[ 
    {image:"assets/top.jpg", name: 'Mootez Hammi', categorie: 'eCole'},
    {image:"assets/bw.jpg", name: 'Gaith Abidi', categorie: 'minime'},
    {image:"assets/cap.jpg", name: 'Morta Aouadi', categorie: 'cadet'}
  ]

  
  players: Player[] = [
    
    {image:"assets/top.jpg", name: 'Mootez Hammi', categorie: 'eCole'},
    {image:"assets/bw.jpg", name: 'Gaith Abidi', categorie: 'minime'},
    {image:"assets/cap.jpg", name: 'Morta Aouadi', categorie: 'cadet'},
    
    {image:"assets/ops.jpg", name: 'Mootez Hammi', categorie: 'juNior'},
    {image:"assets/jump.jpg", name: 'Naoures Chaouachi', categorie: 'ecole'},
    {image:"assets/top.jpg", name: 'Mootez Hammi', categorie: 'junior'},
    {image:"assets/bw.jpg", name: 'Oussema Darraji', categorie: 'minime'},
    {image:"assets/cap.jpg", name: 'Saad Bguir', categorie: 'cadet'},
    
    {image:"assets/ops.jpg", name: 'Mootez Hammi', categorie: 'junior'},
    {image:"assets/jump.jpg", name: 'Med Ben Hammouda', categorie: 'ecole'},
    {image:"assets/jump.jpg", name: 'Khalil Chamem', categorie: 'cadet'},
    {image:"assets/cap.jpg", name: 'Yannick Djang', categorie: 'minime'},
 ];
 get filteredPlayers() {
  return this.selectedCategorie.toUpperCase() ? this.players.filter(player => player.categorie.toUpperCase() === this.selectedCategorie.toUpperCase()) : this.players;
}
 
}
