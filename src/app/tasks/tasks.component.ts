import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { ParticipationService } from '../participation.service';
import { FavorisServiceService } from '../favoris-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  mode: number = 0;
  voyageurs;
  participations: any;
  favoris: any;
  tasks;
  constructor(public authService: AuthServiceService, private router: Router, private favorisService: FavorisServiceService, private participationService: ParticipationService) { }

  ngOnInit() {
    this.authService.getVoyageurs()
    .subscribe(data => {
      this.voyageurs = data;
    }, error => {
      this.authService.logout();
      this.router.navigateByUrl('/login');

      })
    this.participationService.getParticipationList().subscribe(data => {
      this.participations = data;
    }, err => {
      console.log(err);
    })
    this.favorisService.getFavoris().subscribe(data => {
      this.favoris = data;
    }, err => {
      console.log(err);
    })
  }
  ongetvoyages() {
    this.mode = 4;
    this.router.navigateByUrl('/tasks');
  }
  ongetfavoris() {
    this.mode = 3;
    this.router.navigateByUrl('/tasks');
  }
   
  ongetparticipation() {
    this.mode = 2;
    this.router.navigateByUrl('/tasks');
  }
  onNewTask() {
    this.router.navigateByUrl('/new-task');
  }
ongetvoyageurs(){
  this.mode = 1;
  this.router.navigateByUrl('/tasks');
}
  OnClick(id: number) {
    this.participationService.deleteParticipation(id).subscribe(data => {
      this.participations = data;
    }, err => {
      console.log(err);
    })
    window.location.reload();
  }
}
