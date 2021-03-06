import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {

  data: [];

  constructor(public http: HttpClient) { }

  recogerDatos(){
    this.http.get('assets/datos.json').subscribe(data => {

      this.data = JSON.parse(JSON.stringify(data));
      
      return this.data;

    });
  }


  ngOnInit(): void {
    this.recogerDatos();
  }

}
