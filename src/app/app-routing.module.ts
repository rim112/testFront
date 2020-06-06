import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnregistrerParticipationComponent } from './enregistrer-participation/enregistrer-participation.component';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AdminParticipationComponent } from './admin-participation/admin-participation.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserComponent } from './user/user.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { FavorisComponent } from './favoris/favoris.component';
import {GuideVoyageurComponent} from './guide-voyageur/guide-voyageur.component';
import {HospitaliteComponent} from './hospitalite/hospitalite.component';
import { BoListVoyagesComponent } from './bo-list-voyages/bo-list-voyages.component';
import { BoCreatVoyageComponent } from './bo-creat-voyage/bo-creat-voyage.component';
import { BoUpdateVoyageComponent } from './bo-update-voyage/bo-update-voyage.component';
import { BoAccueilComponent } from './bo-accueil/bo-accueil.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [ { path: '', redirectTo: 'voyage', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'adminparticipation', component: AdminParticipationComponent }, {
    path: 'new-task',
    component: NewTasksComponent
  },
  { path: 'add', component: EnregistrerParticipationComponent },
  {
    path: 'register',
    component: RegisterationComponent
  },
  {
    path:'histo',
    component:SearchDeleteComponent

  },
  {
    path: 'hospitalite', component: HospitaliteComponent
  },

  {
    path: 'guide', component: GuideVoyageurComponent
  },
  {
    path: 'registera',
    component: UserComponent
  }, {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'accueil2',
    component: Accueil2Component
  }, {
    path: 'favoris', component: FavorisComponent
  },
  {
    path: 'bo-accueil', component: BoAccueilComponent
  },
  {
    path: 'bo-create', component: BoCreatVoyageComponent
  },
  {
    path: 'bo-update/:id', component: BoUpdateVoyageComponent
  },

  {
    path: 'bo-list', component: BoListVoyagesComponent
  },
  {
    path: 'evaluation',
    component: RegistrationComponent
  },
  {
    path: 'voyages', component: VoyageListComponent, data: { title: 'Liste de voyages' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
