import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InteractionService } from 'src/app/interaction.service';
import {histoService} from 'src/app/histo.service';
@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css'],
  providers:[histoService]
})
export class SearchDeleteComponent implements OnInit {
  voyages :any;
  boole :any;
  voyage:any;
  id:number;
  mode: number=0;
  login :string;
  displayNavbar: boolean;
  constructor(private formBuilder:FormBuilder,private histoservice:histoService,private service: AuthServiceService, private router: Router,private _interactionService: InteractionService) { }

public deleteVoyages(id:number)
{let resp=this.histoservice.deleteVoyagesfromhistobyId(id);
  resp.subscribe((data)=>this.voyages=data);

}
  ngOnInit() {
    if(this.service.isAdmin())
  { this.displayNavbar= false;
    let resp=this.histoservice.getVoyages();
  resp.subscribe((data)=>this.voyages=data);}
  if(this.service.isUser())
  {this._interactionService.currentlogin$.subscribe(login => { this.login = login }
    , err => {
      console.log(err);
    });
  
  let resp=this.histoservice.gethistoList(this.login);
resp.subscribe((data)=>this.voyages=data);
  }
}
  public onclicked(destination: string) {
  this._interactionService.changeLogin(this.login);
  this._interactionService.changeDestination(destination);
}

}
