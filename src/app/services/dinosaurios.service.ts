import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Dinosaurio {
  "nombre": string,
  "altura": number,
  "alimentacion": string,
  "id"?: number, //el signo "?" le esta diciendo que este campo no es obligatorio definir o utilizar.
  "imagen": string
}
@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {

  constructor(private http: HttpClient) {}

    getAllDinosaurios(){
      return this.http.get<Dinosaurio[]>('http://localhost:3939/dinosaurios');
    }
    guardarDinosaurio(dinosaurio: Dinosaurio){
      return this.http.post<Dinosaurio>('http://localhost:3939/dinosaurios',dinosaurio)
    };

   }

