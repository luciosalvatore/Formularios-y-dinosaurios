import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../services/login.service';
import { RegistrarService } from '../services/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  formulario:FormGroup
  constructor(private FormBuilder:FormBuilder, private registrar:RegistrarService){
    this.formulario = FormBuilder.group({
      mail: '',
      password: '',
    })
  }
    onSubmit(event:Event){
      event.preventDefault()
      const usuario:Usuario = {
        mail: this.formulario.get('mail')?.value,
        password: this.formulario.get('password')?.value
      }
      this.registrar.postUsuario(usuario).subscribe(u=> {
        if(u){
        alert('Usuario registrado!')
      }
      else{
        alert('Falla en registrarlo! :(, intentelo de nuevo')
      }
      })
    }



}
