import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  formulario:FormGroup
  constructor(private FormBuilder:FormBuilder, private registrar:AuthService){
    this.formulario = FormBuilder.group({
      mail: '',
      password: '',
    })
  }
    onSubmit(event:Event){
      event.preventDefault()

    }



}
