import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  items: MenuItem[] = [];

  constructor() { };

  ngOnInit(): void {
    this.items = [
      // {
      //   label: 'Pipes de Angular',
      //   icon: 'pi pi-desktop',
      //   items: [
      //     {
      //       label: 'Textos y Fechas',
      //       icon: 'pi pi-align-left',
      //       routerLink: '/'
      //     },
      //     {
      //       label: 'Numeros',
      //       icon: 'pi pi-dollar',
      //       routerLink: 'numeros'
      //     },
      //     {
      //       label: 'No comunes',
      //       icon: 'pi pi-globe',
      //       routerLink: 'no-comunes'
      //     },
      //   ]
      // },
      {
        label: 'Resumen',
        icon: 'pi pi-desktop',
        routerLink: '/'
      },
      {
        label: 'Tareas',
        icon: 'pi pi-check-square',
        routerLink: 'ordenar'
      }
      ,
      {
        label: 'Riesgos/problemas',
        icon: 'pi pi-ban',
        routerLink: 'ordenar'
      }
    ];

  }
}
