import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonaComponent,
    ListarProveedoresComponent,
    ListarInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
