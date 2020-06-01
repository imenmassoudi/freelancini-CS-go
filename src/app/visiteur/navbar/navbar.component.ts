import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material'
import { InscritFComponent } from 'src/app/freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from 'src/app/client/inscrit-c/inscrit-c.component';
import { ConnexionComponent } from '../connexion/connexion.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public popupf:MatDialog,public popupc:MatDialog,public popupconnect:MatDialog) { }

  ngOnInit() {
  }
ffree()
{
  this.popupc.closeAll();
  const config=new MatDialogConfig();
    
    config.autoFocus=true;
    config.width="77%";
    config.position={
      top:'60px',
      
    };
    this.popupf.open(InscritFComponent,config);
    
}
fcli(){
  this.popupf.closeAll();
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="77%";
  
  this.popupc.open(InscritCComponent,config);
}
type()
{
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="77%";
  this.popupconnect.open(ConnexionComponent,config);
}
}
