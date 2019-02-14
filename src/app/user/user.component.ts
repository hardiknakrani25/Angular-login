import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userstate;
  username :string ='hardik';

  constructor(public authService:AuthService,public firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.userstate = this.authService.user;
    console.log(this.userstate);
      if (this.userstate) {
       console.log("login user");
      } else {
        console.log("logout user");
      }
  
  }

  logout() {
    this.authService.logout();
  }

}
