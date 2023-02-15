import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {KnobModule} from 'primeng/knob';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
    DividerModule,
    KnobModule
  ]

})
export class PrimeNgModule { }
