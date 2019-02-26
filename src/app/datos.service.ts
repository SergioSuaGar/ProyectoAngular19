import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private url = new Subject<any>();
  public url$ = this.url.asObservable();

  private estilo = new Subject<any>();
  public estilo$ = this.estilo.asObservable();

  seturl(value){
    this.url.next(value);
  }

  setestilo(value){
    this.estilo.next(value);
  }
  constructor(private http: HttpClient) {
  }
  SearchBooks(valorBuscado,pagina):Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + valorBuscado + '+intitle:' + valorBuscado +'&key=AIzaSyBeHIj8_oRG4T1KjA6YCQB8tOEh124EypA&startIndex='+pagina+'&maxResults=10');
  }
  SearchAutores(valorBuscado,pagina):Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + valorBuscado + '+inauthor:' + valorBuscado +'&key=AIzaSyBeHIj8_oRG4T1KjA6YCQB8tOEh124EypA&startIndex='+pagina+'&maxResults=10');
  }
  detallarLibro(idDetalles):Observable<any>{
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + idDetalles + '&key=AIzaSyBeHIj8_oRG4T1KjA6YCQB8tOEh124EypA&startIndex=0&maxResults=1');
  }
  SearchBooksInicio(valorBuscado):Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + valorBuscado + '+inauthor:j.k rowling&key=AIzaSyBeHIj8_oRG4T1KjA6YCQB8tOEh124EypA&startIndex=0&maxResults=5');
  }
  SearchAutoresInicio(valorBuscado):Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + valorBuscado + '+inauthor:' + valorBuscado +'&key=AIzaSyBeHIj8_oRG4T1KjA6YCQB8tOEh124EypA&startIndex=0&maxResults=5');
  }
}
