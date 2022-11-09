import { NgModule } from '@angular/core';


import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { FotoComponent } from './foto/foto.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


 

@NgModule({
  declarations: [
    FormularioComponent,
    HomeComponent,
    FotoComponent
  ],
  imports: [
   SharedModule,
   FormsModule
  
  ],

  exports:[
    FotoComponent,
    HomeComponent,
    FormularioComponent
  ]
})
export class FotografiaModule { }
