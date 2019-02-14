import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { AuthService } from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,public authService: AuthService) { }
username: string;
password: string;


  ngOnInit() {
  }
  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }

  login() {
    this.authService.login(this.username, this.password);
    
      console.log("Authenticated");
      // this.router.navigate(["user"]);
      this.username = this.password = '';
      
  }

  
  }
