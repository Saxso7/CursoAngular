import { Component, OnInit } from '@angular/core';
//importamos activateRoute
import { ActivatedRoute } from '@angular/router';
//importar service de pokeservice
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-descripcion',
  templateUrl: './poke-descripcion.component.html',
  styleUrls: ['./poke-descripcion.component.scss']
})
export class PokeDescripcionComponent implements OnInit {
  //arreglo para pokemon
  Pokemon: any = [];
  constructor(
    //inyectamos constructor
    private routeActive: ActivatedRoute,
    // inyectamos constructor de pokeservice
    private PokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    //creamos una const id, toma una captura. para obtener el valor en el app routing
    const id = this.routeActive.snapshot.paramMap.get('id');
    //llamamos el servicio, podemos almacenar su informacion en data
    this.PokeService.getPokemon(id).subscribe(data =>{
        this.Pokemon = data
        console.log(this.Pokemon)
    })
    console.log(id);
  }

}
