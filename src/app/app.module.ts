import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnregistrerParticipationComponent } from './enregistrer-participation/enregistrer-participation.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { InteractionService } from './interaction.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PaiementComponent } from './paiement/paiement.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { AdminParticipationComponent } from './admin-participation/admin-participation.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { RegiterationComponent } from './regiteration/regiteration.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthInterceptor } from './auth-interceptor';
import { Accueil2Component } from './accueil2/accueil2.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HospitaliteComponent } from './hospitalite/hospitalite.component';
import { GuideVoyageurComponent } from './guide-voyageur/guide-voyageur.component';
import { BoAccueilComponent } from './bo-accueil/bo-accueil.component';

import { BoCreatVoyageComponent } from './bo-creat-voyage/bo-creat-voyage.component';
import { BoListVoyagesComponent } from './bo-list-voyages/bo-list-voyages.component';
import { BoUpdateVoyageComponent } from './bo-update-voyage/bo-update-voyage.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
@NgModule({
  declarations: [
    AppComponent, EnregistrerParticipationComponent, VoyageListComponent, AuthentificationComponent, AccueilComponent, PaiementComponent, AdminParticipationComponent, NewTasksComponent, RegiterationComponent, TasksComponent, UserComponent, RegisterationComponent, Accueil2Component, FavorisComponent, HospitaliteComponent, GuideVoyageurComponent, BoAccueilComponent, BoCreatVoyageComponent, BoListVoyagesComponent, BoUpdateVoyageComponent, SearchDeleteComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgxPayPalModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, //<<<< and here
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ,InteractionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
