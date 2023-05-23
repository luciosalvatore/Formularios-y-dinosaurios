import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User, AuthService } from 'src/app/services/auth.service';
import { FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

formulario:FormGroup
usuarios:User[] = []

constructor(private formBuilder:FormBuilder,private service: AuthService){
this.formulario = formBuilder.group({
  mail: '',
  password: '',
})
}

handleOnSubmit(event:Event){
  event.preventDefault()

  try{
    this.service.login({mail: this.Email,password: this.Password})
  }catch(e: any) {
    alert(e.message)
  }
}

public get Email():string {
  return this.formulario.get('mail')?.value
}

public get Password():string {
  return this.formulario.get('password')?.value
}

}
