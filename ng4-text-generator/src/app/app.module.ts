import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Output } from './output/output.component'
import { TextGenService } from './textGen.service'

@NgModule({
  declarations: [
    AppComponent,
    Output
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [TextGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }