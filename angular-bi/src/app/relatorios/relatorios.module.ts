import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesagemcoletaComponent } from './pesagemcoleta/pesagemcoleta.component';



@NgModule({
  declarations: [
    PesagemcoletaComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PesagemcoletaComponent
  ]
})
export class RelatoriosModule { }
