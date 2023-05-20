import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }
// Log in del usuario
getAllUsuarios(){
  return this.http.get<Usuario[]>('http://localhost:3939/usuarios')
}
 // Sing In del usuario
postUsuario(usuario:Usuario){
  return this.http.post<Usuario>('http://localhost:3939/usuarios',usuario)
}
}

export interface Usuario{

  mail:string
  password:string
  }





