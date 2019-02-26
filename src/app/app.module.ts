import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DatosService } from './datos.service';
import { FiltroPipe } from './filtro.pipe';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'detalles/:idDetalles', component: DetallesComponent},

  { path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { path: '**', component: InicioComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    FiltroPipe,
    LibrosComponent,
    AutoresComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
