import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmotionComponent } from './emotion/emotion.component';
import { ComponentsComponent } from './components.component';


@NgModule({
  declarations: [
    EmotionComponent,
    ComponentsComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EmotionComponent
  ]
})
export class ComponentsModule { }
