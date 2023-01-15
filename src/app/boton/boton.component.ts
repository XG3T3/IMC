import { Component, Input } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent {
    @Input() color?:string;
    @Input() texto?:string;
    @Input() source?:string;
}
