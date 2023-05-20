import {Routes} from "@angular/router";
import {GetFormPageComponent} from "./pages/get-form-page/get-form-page.component";
import {PostFormPageComponent} from "./pages/post-form-page/post-form-page.component";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import { DinosaurioPageComponent } from "./pages/dinosaurio-page/dinosaurio-page.component";
import { FormularioDinosaurioComponent } from "./pages/formulario-dinosaurio/formulario-dinosaurio.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";

export const PATHS = {
  INDEX: '',
  GET_FORM: 'get-form',
  POST_FORM: 'post-form',
  DINOSAURIO: 'dinosaurio',
  FORMULARIO: 'formulario-dinosaurio',
  LOGIN: 'login',
  REGISTRAR: 'registrar',
}

export const routes: Routes = [
  { path: PATHS.GET_FORM, component: GetFormPageComponent },
  { path: PATHS.POST_FORM, component: PostFormPageComponent },
  { path: PATHS.INDEX, component: IndexPageComponent },
  { path: PATHS.DINOSAURIO, component: DinosaurioPageComponent},
  { path: PATHS.FORMULARIO, component: FormularioDinosaurioComponent},
  { path: PATHS.LOGIN, component: LoginComponent},
  { path: PATHS.REGISTRAR, component: RegistrarComponent},
];
