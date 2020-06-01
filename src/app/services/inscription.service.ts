import { Injectable } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
private enventAuthError=new BehaviorSubject<string>("");
enventAuthError$=this.enventAuthError.asObservable();
  nfreelancer:any;
private dbPath = 'Freelancer';
private id;
private dbPath2='Client';
freelancercat: AngularFirestoreCollection<any>;
clientcat:AngularFirestoreCollection<any>;
  
  constructor(public free: AngularFirestore,private afAuth:AngularFireAuth,private router:Router) { 
    this.freelancercat=free.collection(this.dbPath);
    this.clientcat=free.collection(this.dbPath2);
  }
  
  //partie ajout freelacner et client au  meme temp creation d'authentification
createfreelancer(freelancer,domaine)
{
this.afAuth.createUserWithEmailAndPassword(freelancer.email,freelancer.password)
.then(UserCredential=>{
  this.addfreelancer(freelancer,domaine).then(()=>{this.router.navigate(['']);}


  );
})
.catch(error=>{this.enventAuthError.next(error)})
}
  addfreelancer(info,info2){
   return( this.freelancercat.add(info).then(ref=>{
      this.id =ref.id;
      console.log(this.id);
      this.freelancercat.doc(this.id).update(info2);
    }))
   
    }

    createclient(client)
    {
      this.afAuth.createUserWithEmailAndPassword(client.email,client.password)
      .then(UserCredential=>{
        this.addclient(client).then(()=>{this.router.navigate(['']);})
      
      })
      .catch(error=>{this.enventAuthError.next(error)})
    }

    addclient(info)
    {
      return this.clientcat.add(info);
    }
  
  //partie login et logout freelancer et client
  loginf(freelacner)
  {
    this.afAuth.signInWithEmailAndPassword(freelacner.email,freelacner.password)
    .catch(error=>{this.enventAuthError.next(error)})
  }
  loginc(client)
  {
    this.afAuth.signInWithEmailAndPassword(client.email,client.password)
    .catch(error=>{this.enventAuthError.next(error)})
  }
  logout()
  {
    this.afAuth.signOut()
  }
}
