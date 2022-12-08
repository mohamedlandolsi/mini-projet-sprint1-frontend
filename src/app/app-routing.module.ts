import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModelComponent } from './recherche-par-model/recherche-par-model.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';

const routes: Routes = [
  {path: "smartphones", component : SmartphonesComponent},
  {path: "add-smartphone", component: AddSmartphoneComponent},
  {path: "", redirectTo: "smartphones", pathMatch: "full"},
  {path: "updateSmartphone/:id", component: UpdateSmartphoneComponent},
  {path: "rechercheParMarque", component: RechercheParMarqueComponent},
  {path: "rechercheParModel", component: RechercheParModelComponent},
  {path: "listeMarques", component: ListeMarquesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
