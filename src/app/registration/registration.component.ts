import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/user';
import { HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { Voyage } from 'src/app/Voyage';
import {SearchDeleteComponent} from  'src/app/search-delete/search-delete.component';
import { InteractionService } from '../interaction.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: AuthenticationService, private router: Router, private interactionService: InteractionService) {}


  user: User = new User('', '', 0, '');
  message: any;
  login: string;
  destination: string;
  mode: number = 0;

  ngOnInit() {
    this.interactionService.currentlogin$.subscribe(login => { this.login = login }
        , err => {
          console.log(err);
        });
      console.log(this.interactionService.currentlogin$);
      console.log(this.login);
    this.interactionService.currentDestination$.subscribe(destination => { this.destination = destination }
      , err => {
        console.log(err);
      });

  }
  

  public registerNow() {
    console.log(this.login);
    this.user.destination = this.destination;
    this.user.username= this.login;
    this.user.dateevaluation = '2020-05-02';
    console.log(this.user);
  this.service.doRegistration(this.user).subscribe(data => {this.user = data; this.mode = 1;
  }, err => {
  console.log(err);
      });
  }
}
