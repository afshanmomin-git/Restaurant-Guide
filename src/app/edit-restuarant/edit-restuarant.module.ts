import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRestuarantPageRoutingModule } from './edit-restuarant-routing.module';
import { EditRestuarantPage } from './edit-restuarant.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRestuarantPageRoutingModule,
   
  ],
  declarations: [EditRestuarantPage]
})
export class EditRestuarantPageModule {}
