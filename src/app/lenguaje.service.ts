import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lenguaje } from './lenguaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  private urlBase = "http://localhost:8080/portafolio-online/conocimientos"

  constructor(private clientHttp: HttpClient) { }

  obtenerLensuajeLista(): Observable<Lenguaje[]>{
    return this.clientHttp.get<Lenguaje[]>(this.urlBase);
  }
}
