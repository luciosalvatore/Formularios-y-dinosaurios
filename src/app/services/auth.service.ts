import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false;

  constructor(private http: HttpClient) {}

  login(user: User) {
    this.http.get<User[]>('http://localhost:3939/usuarios').pipe().subscribe((users) => {
       const listUsersFound = users.filter(u => user.mail === u.mail )
       const userFound = listUsersFound[0]

       if(userFound.password === user.password){
         this.isLogged = true;
         localStorage.setItem('user', JSON.stringify(userFound))
         }else{
          throw new Error('Usuario o contraseña incorrectos')
       }
    });
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('user');
  }


  isUserLogged() {
    const usuarioAlmacenado = localStorage.getItem('user');
    if(usuarioAlmacenado !== null){
      this.isLogged = true;
    }
    return this.isLogged;
  }
}
