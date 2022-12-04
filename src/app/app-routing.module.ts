import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompraComponent } from "./compra/compra.component";
import { ConfirmacionComponent } from "./confirmacion/confirmacion.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'coffee',
        pathMatch: 'full'
    },
    {
        path: 'coffee',
        component: CompraComponent
    },
    {
        path: 'confirmacion',
        component: ConfirmacionComponent
    }
];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule
    ],
    exports: [RouterModule],
    bootstrap: [
        CompraComponent,
        ConfirmacionComponent
    ],
})
export class AppRoutingModule { }