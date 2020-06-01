import { Component, OnInit } from '@angular/core';
import{InscriptionService}from'../../services/inscription.service'
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { debounceTime, take, map } from 'rxjs/operators';
@Component({
  selector: 'app-inscrit-c',
  templateUrl: './inscrit-c.component.html',
  styleUrls: ['./inscrit-c.component.css']
})
export class InscritCComponent implements OnInit {

  
  fcli :FormGroup=new FormGroup({
    img:new FormControl(''),
    client:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email],EmailValidatorc.vmail(this.afs)),
    
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    
    tel:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]),
    
 
    

  });
  constructor(private service:InscriptionService,private afs:AngularFirestore) { }
  ngOnInit() {
  }
addclient()
{
this.fcli.patchValue({
  img:"https://cdn1.iconfinder.com/data/icons/ui-6/502/user-512.png"
})
this.service.createclient(this.fcli.value);
}



}

export class EmailValidatorc{
  static vmail(afs:AngularFirestore){
    return (control:AbstractControl)=>{
const vmail=control.value.toLowerCase();
return afs.collection('Client',ref=>ref.where('email','==',vmail))
.valueChanges().pipe(debounceTime(500),take(1),
map(arr=>arr.length ?{emailAvailable:false }:null),
)

    }
  }
}
