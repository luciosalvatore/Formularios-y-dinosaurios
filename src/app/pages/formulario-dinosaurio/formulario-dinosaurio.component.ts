import { Component } from '@angular/core';
import { Dinosaurio, DinosauriosService } from 'src/app/services/dinosaurios.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-dinosaurio',
  templateUrl: './formulario-dinosaurio.component.html',
  styleUrls: ['./formulario-dinosaurio.component.css']
})
export class FormularioDinosaurioComponent {

  formDinosaurio: FormGroup;
  resultForm: string;
  dinosaurios: Dinosaurio[];

  constructor(
    private formBuilder: FormBuilder,
    private service: DinosauriosService,
  ) {
    this.formDinosaurio = this.formBuilder.group({
      nombre: '',
      altura: '',
      alimentacion: '',
      imagen: '',
    });

    this.resultForm = '';
    this.dinosaurios = [];
  }

  onSubmit(event:Event) {
    event.preventDefault()
    this.service.guardarDinosaurio({
    nombre: this.formDinosaurio.get('nombre')?.value,
    altura: this.formDinosaurio.get('altura')?.value,
    alimentacion: this.formDinosaurio.get('alimentacion')?.value,
    imagen: this.formDinosaurio.get('imagen')?.value,
    }).subscribe(result => {
      console.log(result)
      alert("formulario enviado!")
    })


  }
}
