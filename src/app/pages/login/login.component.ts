import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService, Usuario } from 'src/app/services/login.service';
import { FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

formulario:FormGroup
usuarios:Usuario[] = []

constructor(private formBuilder:FormBuilder,private service: LoginService){
this.formulario = formBuilder.group({
  mail: '',
  password: '',
})
}

handleOnSubmit(event:Event){
  event.preventDefault()
 // console.log(this.formulario.get('mail').value)
  this.service.getAllUsuarios().subscribe(usuarios => {
    const filterUser = usuarios.filter(usuario => usuario.mail === this.formulario.get('mail')?.value)[0]
    if(filterUser && filterUser.password === this.formulario.get('password')?.value){
      alert('logeado')
    }
    else{
      alert('credenciales incorrectas')
    }
  })
}


}
