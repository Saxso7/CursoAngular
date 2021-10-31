import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokeDescripcionComponent } from './components/poke-descripcion/poke-descripcion.component';

const routes: Routes = [
  //abrimos llaves
  {//declaramos rutas con la palabra reservada path
    path: 'home',component: HomeComponent
  },//para agregar otra ruta se le antepone ,
  {
    path: 'pokemones',component: PokemonesComponent
  },
  {
    //le agregamos una ruta a nuestra descripcion
    path: 'pokemones/:id' ,component: PokeDescripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
