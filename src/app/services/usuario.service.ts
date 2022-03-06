import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "mgodoyd", nombre: 'Mario', apellido: "Godoy", sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez", sexo: 'Masculino'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Masculino'},
    {usuario: "mjperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "sgomez", nombre: 'Micaela', apellido: "Gomez", sexo: 'Femenino'},
    {usuario: "mgarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Masculino'}

  ]


  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
}
eliminarUsuario(index:number){
  this.listUsuarios.splice(index, 1);
}
agregarUsuario(usuario:Usuario) {
  this.listUsuarios.unshift(usuario);
}
}
