import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { DEMOCRUDComponent } from './demo-crud/demo-crud.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { ContactComponent } from './visiteur/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetComponent } from './classe/projet/projet.component';
import { NavbarComponent } from './visiteur/navbar/navbar.component';
import { FooterComponent } from './visiteur/footer/footer.component';
import { CarouselComponent } from './visiteur/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material/material.module';
import { InscritFComponent } from './freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from './client/inscrit-c/inscrit-c.component';
import { ConnexionComponent } from './visiteur/connexion/connexion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ConnectfComponent } from './freelancer/connectf/connectf.component';


@NgModule({
  declarations: [
    AppComponent,
    DEMOCRUDComponent,
    AccueilComponent,
    ContactComponent,
    ProjetComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    InscritFComponent,
    InscritCComponent,
    ConnexionComponent,
    ConnectfComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[InscritFComponent,InscritCComponent,ConnexionComponent,ConnectfComponent]
})
export class AppModule { }
