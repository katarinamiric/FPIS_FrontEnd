import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddRacunOsiguranjaComponent} from './add-racun-osiguranja/add-racun-osiguranja.component';
import {RacunOsiguranjaComponent} from './racun-osiguranja.component';


const routes: Routes = [
  {
    path: '',
    component: RacunOsiguranjaComponent,
  },
  {
    path: 'add',
    component: AddRacunOsiguranjaComponent,
  },
  {
    path: 'edit/:racunId',
    component: AddRacunOsiguranjaComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RacunOsiguranjaRoutingModule { }
