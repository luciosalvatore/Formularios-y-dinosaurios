import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Email, EmailsService} from "../../services/emails.service";

@Component({
  selector: 'app-get-form-page',
  templateUrl: './get-form-page.component.html',
  styleUrls: ['./get-form-page.component.css']
})
export class GetFormPageComponent{
  getForm: FormGroup;
  resultForm: string;
  emails: Email[];
  constructor(
    private formBuilder: FormBuilder,
    private service: EmailsService,
  ) {
    this.getForm = this.formBuilder.group({
      email: '',
    });

    this.resultForm = '';
    this.emails = [];
  }

  onSubmit(event:Event) {
    event.preventDefault()
    this.service.getAllEmails().subscribe((mails: Email[]) => {  //
      if(mails.some((mail: Email) => mail.email === this.getForm.get('email')?.value)){
        this.resultForm = 'El email existe en la base de datos'
      }else {
        this.resultForm = 'El email no existe en la base de datos'
      }
    })
  }
  onClick() {
    this.service.getAllEmails().subscribe((mails: Email[]) => {
      this.emails = [...mails] //clonacion
      console.log(this.emails)
     // this.emails = mails.map(email => email) // clonaciones otra forma por funcion map
    })
  }

}
