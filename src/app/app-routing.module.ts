import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';

const routes: Routes = [
  {path: 'datosPersona', component: DatosPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
