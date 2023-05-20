import { Component } from '@angular/core';
import {PATHS, routes} from "../../routes";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {
  routes = routes.filter(route => route.path !== PATHS.INDEX) // paths.index =  genera rutas en la pagina index.
}
