import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  isFavorite = false;
  favContent="☆";
  changeStarStyle(){
    if(!this.isFavorite){
      this.favContent="★"
      this.isFavorite=true
    }else if (this.isFavorite){
      this.favContent="☆";
      this.isFavorite=false
    }
  }
}
