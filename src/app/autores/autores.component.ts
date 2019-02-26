import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import {slideToRight} from '../router.animation';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class AutoresComponent implements OnInit {
  libros:Array<any>;
  valorBuscado;
  pagina: number = 0;
  constructor(private servicioConDatos:DatosService) { }
  OnSearch(valorBuscado){
    this.pagina = 0;
    this.servicioConDatos.SearchAutores(valorBuscado, this.pagina).subscribe(
      data=> {
        this.libros = data.items;
      }
    );
  }

  siguientePagina() {
    this.pagina = this.pagina + 10;
    this.servicioConDatos.SearchAutores(this.valorBuscado, this.pagina).subscribe(
      data => {
        this.libros = this.libros.concat(data.items);
      }
    );
  }

  ngOnInit() {
    this.servicioConDatos.seturl('autores');
  }

}
