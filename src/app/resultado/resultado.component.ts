import { Component,Input } from '@angular/core';

@Component({
  selector: 'resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {


  @Input() resultao:string;
  @Input() estado:string;


  
}

