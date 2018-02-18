import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { DataDrivenDebugComponent } from './data-driven-debug/data-driven-debug.component';
import { DataDrivenModule } from './data-driven/data-driven.module';
import { FieldControlErrorComponent } from './data-driven/field-control-error/field-control-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    DataDrivenDebugComponent,
    FieldControlErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
