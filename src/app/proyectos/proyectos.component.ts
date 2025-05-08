import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Proyecto } from '../proyecto';
import { Router } from '@angular/router';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos: Proyecto[];
  constructor(private proyectoServicio: ProyectoService,
    private enrutador: Router
  ){

  }
  
ngOnInit(){
  // cargamos todos los productos
  this.obtenerLenguaje();
}

private obtenerLenguaje(){
  this.proyectoServicio.obtenerProyectoLista().subscribe(
    (datos => {
      this.proyectos = datos;
    })
  );
}
}
