import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatDatepickerModule
  } from '@angular/material';
import {Component} from '@angular/core';
import { ReadGuitarsComponentComponent } from './read/read-guitars-component.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create-guitar-component.component';
import { HomePageComponent } from './home-page/home-page.component';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ReadGuitarsComponentComponent,
    EditComponent,
    CreateComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
MatButtonModule,
MatToolbarModule,
MatExpansionModule,
BrowserAnimationsModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
RouterModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
