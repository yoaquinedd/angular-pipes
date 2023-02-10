import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect


  nombre:string = 'Joaquin';
  genero:string = 'masculino';

  invitacionMapa={
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Catalina','Joaquin','Alexis'];
  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'un cliente esperando',
    'other': ' # clientes esperando'
  }

  cambiarPersona(){
    this.nombre='Martina'
    this.genero='femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // Key value Pipe
  persona={
    nombre:'Joaquin',
    edad: 22,
    direccion: 'Chillan, Chile'
  }

  //JsonPipe
  heroes=[
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000);//0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);


  });
}
