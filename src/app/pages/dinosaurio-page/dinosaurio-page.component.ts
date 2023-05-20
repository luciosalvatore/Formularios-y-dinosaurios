import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Dinosaurio, DinosauriosService } from 'src/app/services/dinosaurios.service'

@Component({
  selector: 'app-dinosaurio-page',
  templateUrl: './dinosaurio-page.component.html',
  styleUrls: ['./dinosaurio-page.component.css']
})
export class DinosaurioPageComponent {


  resultForm: FormGroup;
  dinosaurios: Dinosaurio[] = [];
  constructor(private formBuilder: FormBuilder, private service: DinosauriosService) {


    this.resultForm = this.formBuilder.group({
      dinosaurio: '',
    });
    this.dinosaurios = [];
  }

  onClick() {
    this.service.getAllDinosaurios().subscribe((dinosaurios: Dinosaurio[]) => {
      this.dinosaurios = [...dinosaurios] //clonacion
      console.log(this.dinosaurios)
     // this.emails = mails.map(email => email) // clonaciones otra forma por funcion map
    })
  }

}
