import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import {slideToRight} from '../router.animation';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}

})
export class LibrosComponent implements OnInit {
  libros:Array<any>;
  valorBuscado;
  pagina: number = 0;
  constructor(private servicioConDatos:DatosService) { }
  OnSearch(valorBuscado){
    this.servicioConDatos.SearchBooks(valorBuscado, this.pagina).subscribe(
      data=> {
        this.libros = data.items;
      }
    );
  }

  siguientePagina() {
    this.pagina = this.pagina + 10;
    this.servicioConDatos.SearchBooks(this.valorBuscado, this.pagina).subscribe(
      data => {
        this.libros = this.libros.concat(data.items);
      }
    );
  }
  ngOnInit() {
    this.servicioConDatos.seturl('libros');
  }

}
