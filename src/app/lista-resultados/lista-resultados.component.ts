import { Component, Input } from '@angular/core';
import { Resultados } from '../resultados';

@Component({
  selector: 'lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.scss']
})
export class ListaResultadosComponent {

  @Input() lista:Resultados[];
}
