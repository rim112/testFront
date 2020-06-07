import { Component, OnInit } from '@angular/core';
import { FavorisServiceService } from '../favoris-service.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  public favoris: any;
  public login: string;
  public prix: any;
  constructor(private _interactionService: InteractionService,private favorisService: FavorisServiceService) { }
  

  ngOnInit(): void {
    this._interactionService.currentlogin$.subscribe(login => { this.login = login }
      , err => {
        console.log(err);
      });
    
    this.favorisService.getFavorisList(this.login).subscribe(data => {
      this.favoris = data;
    }, err => {
      console.log(err);
    })
  }
  title = 'Mes Favoris';
  /*<td>
        <button (click)="Onclick(todo.id_favoris)" style="background:green;color:#fff;">
          delete
        </button>
      </td>*/

  Onclick(id: number) {
    this.favorisService.deleteFavoris(id).subscribe(data => {
      this.favoris = data;
    }, err => {
      console.log(err);
    })
    window.location.reload();
  }
}
