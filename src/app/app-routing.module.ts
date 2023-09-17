import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';

const routes: Routes = [
  {path: 'datosPersona', component: DatosPersonaComponent},
  {path: 'proveedores/listarProveedores', component: ListarProveedoresComponent},
  {path: 'inventarios/listarInventarios', component: ListarInventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
