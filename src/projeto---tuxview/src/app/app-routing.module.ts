import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormularioComponent } from "./fotografia/formulario/FormularioComponent";
import { HomeComponent } from "./fotografia/home/home.component";
import { FotoComponent } from "./fotografia/foto/foto.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'foto', component: FotoComponent},
    {path:'formulario', component: FormularioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}