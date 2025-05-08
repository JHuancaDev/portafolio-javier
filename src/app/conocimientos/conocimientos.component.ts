import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lenguaje } from '../lenguaje';
import { LenguajeService } from '../lenguaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conocimientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conocimientos.component.html',
  styleUrl: './conocimientos.component.css'
})
export class ConocimientosComponent {
  lenguajes: Lenguaje[];
  constructor(private lenguajeServicio: LenguajeService,
    private enrutador: Router
  ){

  }


ngOnInit(){
  // cargamos todos los productos
  this.obtenerLenguajes();
}

private obtenerLenguajes(){
  this.lenguajeServicio.obtenerLensuajeLista().subscribe(
    (datos => {
      this.lenguajes = datos;
    })
  );
}
}