import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import {slideToRight} from '../router.animation';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class InicioComponent implements OnInit {

  constructor(private servicioConDatos:DatosService) { }
  libros:Array<any>;
  libros2:Array<any>;
  valorBuscado='harry potter';
  valorBuscado2='Rick Riordan';

  ngOnInit() {
  this.servicioConDatos.SearchBooksInicio(this.valorBuscado).subscribe(
    data=> {
      this.libros = data.items;
    }
  );
    this.servicioConDatos.SearchAutoresInicio(this.valorBuscado2).subscribe(
      data=> {
        this.libros2 = data.items;
      }
    );
    this.servicioConDatos.seturl('inicio');
  }

}
