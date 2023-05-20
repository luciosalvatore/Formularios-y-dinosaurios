import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { GetFormPageComponent } from './pages/get-form-page/get-form-page.component';
import { PostFormPageComponent } from './pages/post-form-page/post-form-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { AcercadepageComponent } from './acercadepage/acercadepage.component';
import { DinosaurioPageComponent } from './pages/dinosaurio-page/dinosaurio-page.component';
import { FormularioDinosaurioComponent } from './pages/formulario-dinosaurio/formulario-dinosaurio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    GetFormPageComponent,
    PostFormPageComponent,
    AcercadepageComponent,
    DinosaurioPageComponent,
    FormularioDinosaurioComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // http module angular
    HttpClientModule,

    // modulos para el uso de rutas
    AppRoutingModule,

    // modulos para el uso de formularios
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
