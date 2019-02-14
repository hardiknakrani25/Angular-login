import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,private router: Router) {
    this.user = firebaseAuth.authState;
    
  }

   authvar;
  login(email: string, password: string) {
   
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
         this.authvar=true;
         this.router.navigate(["user"]);
      })
      .catch(err => {
    
        console.log('Something went wrong:',err.message);
        return this.authvar=false;
      });
    
      
   
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      console.log("Signout called");
      this.router.navigate([""]);
  }

}