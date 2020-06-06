import { VoyageService } from '../voyage.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from 'src/app/Voyage';

@Component({
  selector: 'app-bo-update-voyage',
  templateUrl: './bo-update-voyage.component.html',
  styleUrls: ['./bo-update-voyage.component.css']
})
export class BoUpdateVoyageComponent implements OnInit {

  id: number;
  voyage: Voyage;
  constructor(private route: ActivatedRoute,private router: Router,
              private voyageService: VoyageService) { }

  ngOnInit() {
    this.voyage = new Voyage();

    this.id = this.route.snapshot.params['id'];

    this.voyageService.getVoyage(this.id)
      .subscribe(data => {
        console.log(data)
        this.voyage = data;
      }, error => console.log(error));
  }

  updateVoyage() {
    this.voyageService.updateVoyage(this.id, this.voyage)
      .subscribe(data => console.log(data), error => console.log(error));
    this.voyage = new Voyage();
    this.gotoList();
  }

  onSubmit() {
    this.updateVoyage();
  }

  gotoList() {
    this.router.navigate(['/bo-list']);
  }
}
