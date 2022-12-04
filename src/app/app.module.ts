import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListadoCompraComponent } from './listado-compra/listado-compra.component';
import { CompraComponent } from './compra/compra.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { AppRoutingModule } from './app-routing.module';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    ListadoCompraComponent,
    CompraComponent,
    ConfirmacionComponent,
    InputCantidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
