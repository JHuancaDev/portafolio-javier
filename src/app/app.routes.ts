import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'conocimientos', component: ConocimientosComponent},
    {path: 'proyectos', component: ProyectosComponent}
];
