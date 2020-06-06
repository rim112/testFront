import { VoyageService } from '../voyage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bo-creat-voyage',
  templateUrl: './bo-creat-voyage.component.html',
  styleUrls: ['./bo-creat-voyage.component.css']
})
export class BoCreatVoyageComponent implements OnInit {

  voyage: Voyage = new Voyage();
  submitted = false;

  constructor(private voyageService: VoyageService,
              private router: Router) { }

  ngOnInit() {
  }

  newVoyage(): void {
    this.submitted = false;
    this.voyage = new Voyage();
  }

  save() {
    this.voyageService.createVoyage(this.voyage)
      .subscribe(data => console.log(data), error => console.log(error));
    this.voyage = new Voyage();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bo-list']);
  }
}
