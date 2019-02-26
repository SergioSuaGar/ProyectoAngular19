import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
estilo='oscuro';
  constructor(private servicioConDatos:DatosService) { }
  ngOnInit() {
    this.servicioConDatos.estilo$.subscribe(
      data => this.estilo = data
    );
  }
}
