import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  data: [];
  constructor(public http: HttpClient) { }
  login(){
    var email =  [];
    var password =  [];
    this.http.get('assets/datos.json').subscribe(data => {

      this.data = JSON.parse(JSON.stringify(data));
      for (var x in data){
       email.push(data[x].email); 
       password.push(data[x].contrasena);
       if(email[x] == this.email && password[x] == this.password){
         console.log('BIEN')
       }else{
        console.log('mal')
      }       
    }
    });

    
  }

  ngOnInit(): void {

  }

}
