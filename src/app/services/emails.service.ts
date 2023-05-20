import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Email {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private http: HttpClient) {}

  getAllEmails(){
    return this.http.get<Email[]>('http://localhost:3939/emails');
  }
}
