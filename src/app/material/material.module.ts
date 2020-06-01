import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatDialogModule,
   Material.MatInputModule,
   Material.MatFormFieldModule,
   Material.MatToolbarModule,
   Material.MatButtonModule,
   Material.MatCheckboxModule,
   Material.MatRadioModule,
   Material.MatListModule,
   Material.MatOptionModule,
   Material.MatSelectModule,
   Material.MatStepperModule,
   Material.MatMenuModule,
   Material.MatTooltipModule,
   Material.MatProgressSpinnerModule,

   
   DragDropModule,
   
  ],
  exports:[
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatDialogModule,
    Material.MatInputModule,
   Material.MatFormFieldModule,
   Material.MatToolbarModule,
   Material.MatButtonModule,
   Material.MatCheckboxModule,
   Material.MatRadioModule,
   Material.MatListModule,
   Material.MatOptionModule,
   Material.MatSelectModule,
   Material.MatStepperModule,
   Material.MatMenuModule,
   Material.MatTooltipModule,
   Material.MatProgressSpinnerModule,
   DragDropModule,
    ]
})
export class MaterialModule { }
