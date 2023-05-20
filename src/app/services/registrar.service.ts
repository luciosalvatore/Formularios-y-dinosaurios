import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }
postUsuario(usuario:Usuario){
    return this.http.post<Usuario>('http://localhost:3939/usuarios',usuario)
  }
}

export interface Usuario{
  mail:string,
  password:string,
}
