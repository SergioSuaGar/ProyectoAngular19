import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { DatosService } from '../datos.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ruta = '';
  estilo='oscuro';
  constructor(private servicioConDatos:DatosService) { }

  cambiarEstilo(){
    let variable = $('select').val();
    this.servicioConDatos.setestilo(variable);
    this.servicioConDatos.estilo$.subscribe(
      data => {
        this.estilo = data;
      });
  }
  ngOnInit() {
    this.cambiarEstilo();
    this.servicioConDatos.url$.subscribe(
      data => {
        this.ruta = data;
      });
  }

}
