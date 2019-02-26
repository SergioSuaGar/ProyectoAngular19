import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatosService} from "../datos.service";
import {slideToRight} from '../router.animation';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class DetallesComponent implements OnInit {
  public idDetalles:string;
  detalles:Array<any>;
  constructor(private route: ActivatedRoute,private servicioConDatos:DatosService) { }

  ngOnInit() {
    this.idDetalles = this.route.snapshot.paramMap.get('idDetalles');
    this.servicioConDatos.detallarLibro(this.idDetalles).subscribe(
      data=> {
        this.detalles = data.items;
      }
    );
  }
}
