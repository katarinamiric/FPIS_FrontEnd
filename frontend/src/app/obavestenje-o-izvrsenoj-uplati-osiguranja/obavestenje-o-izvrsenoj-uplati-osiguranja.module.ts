import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObavestenjeOIzvrsenojUplatiOsiguranjaRoutingModule} from './obavestenje-o-izvrsenoj-uplati-osiguranja-routing.module';
import {ObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './add-obavestenje-o-izvrsenoj-uplati-osiguranja/add-obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './view-obavestenje-o-izvrsenoj-uplati-osiguranja/view-obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PretragaUplatnicaComponent} from './pretraga-uplatnica/pretraga-uplatnica.component';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    ObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
    AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
    ConfirmDialogComponent,
    ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
    PretragaUplatnicaComponent,
  ],
    imports: [
        CommonModule,
        ObavestenjeOIzvrsenojUplatiOsiguranjaRoutingModule,
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
        MatDividerModule,
        MatDatepickerModule,
        InputTextModule
    ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
    PretragaUplatnicaComponent,
  ],
  entryComponents: [
    AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent,
    PretragaUplatnicaComponent,
    ConfirmDialogComponent,
    ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent]
})
export class ObavestenjeOIzvrsenojUplatiOsiguranjaModule {
}
