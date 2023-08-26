import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RacunOsiguranjaComponent} from "./racun-osiguranja.component";
import {RacunOsiguranjaRoutingModule} from "./racun-osiguranja-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {TableModule} from "primeng/table";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {AddRacunOsiguranjaComponent} from './add-racun-osiguranja/add-racun-osiguranja.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ObavestenjeOIzvrsenojUplatiOsiguranjaModule} from "../obavestenje-o-izvrsenoj-uplati-osiguranja/obavestenje-o-izvrsenoj-uplati-osiguranja.module";
import {MatDividerModule} from "@angular/material/divider";
import {StavkaRacunaOsiguranjaComponent} from './stavka-racuna-osiguranja/stavka-racuna-osiguranja.component';
import {AddStavkaRacunaOsiguranjaComponent} from './stavka-racuna-osiguranja/add-stavka-racuna-osiguranja/add-stavka-racuna-osiguranja.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ViewRacunOsiguranjaComponent} from './view-racun-osiguranja/view-racun-osiguranja.component';
import { PretragaUgovoraComponent } from './pretraga-ugovora/pretraga-ugovora.component';


@NgModule({
  declarations: [
    AddRacunOsiguranjaComponent,
    RacunOsiguranjaComponent,
    AddRacunOsiguranjaComponent,
    StavkaRacunaOsiguranjaComponent,
    AddStavkaRacunaOsiguranjaComponent,
    ViewRacunOsiguranjaComponent,
    PretragaUgovoraComponent
  ],
  imports: [
    CommonModule,
    RacunOsiguranjaRoutingModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    ObavestenjeOIzvrsenojUplatiOsiguranjaModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [AddStavkaRacunaOsiguranjaComponent, ViewRacunOsiguranjaComponent, PretragaUgovoraComponent]
})
export class RacunOsiguranjaModule {
}
