import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {Component} from '@angular/core';
import { ListGuitarsComponentComponent } from './list-guitars-component/list-guitars-component.component';
import { DeleteGuitarComponentComponent } from './delete-guitar-component/delete-guitar-component.component';
import { CreateGuitarComponentComponent } from './create-guitar-component/create-guitar-component.component';
import { ServicesComponent } from './services/services.component';
@Component({
  selector: 'button-overview-example',
})

@NgModule({
  declarations: [
    AppComponent,
    ListGuitarsComponentComponent,
    DeleteGuitarComponentComponent,
    CreateGuitarComponentComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
