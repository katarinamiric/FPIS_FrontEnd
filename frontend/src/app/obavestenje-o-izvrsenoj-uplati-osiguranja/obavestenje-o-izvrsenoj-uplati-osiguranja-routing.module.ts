import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './add-obavestenje-o-izvrsenoj-uplati-osiguranja/add-obavestenje-o-izvrsenoj-uplati-osiguranja.component';


const routes: Routes = [
  {
    path: '',
    component: ObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
  },
  {
    path: 'add',
    component: AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
  },
  {
    path: 'edit/:obavestenjeId',
    component: AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class ObavestenjeOIzvrsenojUplatiOsiguranjaRoutingModule {
}
