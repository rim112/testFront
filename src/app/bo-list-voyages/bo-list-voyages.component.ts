import { Observable } from 'rxjs';
import { VoyageService } from '../voyage.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Voyage } from 'src/app/Voyage';

@Component({
  selector: 'app-bo-list-voyages',
  templateUrl: './bo-list-voyages.component.html',
  styleUrls: ['./bo-list-voyages.component.css']
})
export class BoListVoyagesComponent implements OnInit {
  public voyages: any;


  constructor(private voyageService: VoyageService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.voyages = this.voyageService.getVoyagesList();
  }

  deleteVoyage(id: number) {
    this.voyageService.deleteVoyage(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateVoyage(id: number) {
    this.router.navigateByUrl('/bo-update/'+id);
  }





  voyageDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
