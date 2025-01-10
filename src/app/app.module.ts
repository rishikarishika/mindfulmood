import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // RouterModule
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; //FormsModule

import { AppComponent } from './app.component'; //APPComponent
import { AppRoutingModule } from './app-routing.module'; // AppRoutingModule

import { ComponentsModule } from './components/components.module'; //ComponentsModule
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
    HttpClientModule,
    FormsModule, 
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }