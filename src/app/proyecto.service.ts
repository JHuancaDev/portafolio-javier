import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from './proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlBase = "http://localhost:8080/portafolio-online/proyectos"

  constructor(private clientHttp: HttpClient) { }

  obtenerProyectoLista(): Observable<Proyecto[]>{
    return this.clientHttp.get<Proyecto[]>(this.urlBase);
  }
}
