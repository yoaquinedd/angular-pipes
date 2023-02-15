import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {


  nombreLower: string = 'joaquin';
  nombreUpper: string = 'JOAQUIN';
  nombreCompleto: string = 'joaQuiN pObLetE';

  value:number=0;


  fecha: Date = new Date();
}
