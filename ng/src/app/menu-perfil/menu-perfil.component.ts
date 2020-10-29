import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.css']
})
export class MenuPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      var cont = 0;
      if(cont == 0){
        setTimeout(function() {
            $('.texto').delay(1000);
            $('.texto').fadeToggle(1000);
            $('.menu').hide();
        }, 0);
        setTimeout(function() {
            $('.menu').show();
        }, 2000);
        cont++;
      }else{
        $('.texto').hide();
        $('.menu').show();
      }
    });  
  }
}


