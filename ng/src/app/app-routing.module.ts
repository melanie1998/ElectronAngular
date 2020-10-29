import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuPerfilComponent } from './menu-perfil/menu-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'menuPerfil', component: MenuPerfilComponent },
  { path: 'perfil', component: PerfilComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
