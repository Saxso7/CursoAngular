import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';
//llamamos a router
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {
  //propiedad que nos permite alojar los pokemones de la url y nombre
  Pokemones: any = [];
  constructor(
    //inyectamos en el contructor el service
    private PokeService: PokeAPIService,
    //inyectamos el router
    private router:Router
  ) { }

  ngOnInit(): void {
    //para que se ejecute la funcion la debemos ejecutar cuando se cargue
    this.getAllPokemones();
  }
  //funcion para llamar a todos los pokemones a partir de la url
  getAllPokemones(){
    this.PokeService.getPokemones().subscribe(pokemones => {
      //con subscribe tenemos la actualizacion y todo lo que pase con los pokemones
      console.log(pokemones);
      //usamos la propiedad pokemones
      this.Pokemones = pokemones;
    })
  } 
  //creamos la funcion de el evento click 
  showPokemones(id: any){
    //generamos la route con literal template que con comillas laterales `
    this.router.navigateByUrl(`pokemones/${id}`);
    console.log(id);
  }
}

