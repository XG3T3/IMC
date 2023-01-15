import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { BotonComponent } from './boton/boton.component';

import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './resultado/resultado.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import { IMCComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    ResultadoComponent,
    ListaResultadosComponent,
    IMCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
