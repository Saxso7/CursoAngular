import { Injectable } from '@angular/core';
import { PokeAPI } from 'src/environments/PokeAPI';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    //hacemos inyeccion de dependencia 
    private http: HttpClient
  ) { }
   //creamos funcion que nos permita tener a los pokemones 
getPokemones(){
  //retornamos el valor de la url de pokeAPI
  return this.http.get(`${PokeAPI.url}pokemon`);
}
//creamos la funcion para obtener la descripcion
getPokemon(id: any){
  return this.http.get(`${PokeAPI.url}pokemon/${id}`)
}
}
