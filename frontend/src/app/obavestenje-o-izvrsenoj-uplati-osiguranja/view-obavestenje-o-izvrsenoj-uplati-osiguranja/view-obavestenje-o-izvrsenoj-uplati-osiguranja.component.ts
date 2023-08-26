import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ObavestenjeOIzvrsenojUplati} from '../../model/obavestenje-o-izvrsenoj-uplati.model';

@Component({
  selector: 'app-view-payment-slip',
  templateUrl: './view-obavestenje-o-izvrsenoj-uplati-osiguranja.component.html',
  styleUrls: ['./view-obavestenje-o-izvrsenoj-uplati-osiguranja.component.css']
})
export class ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ObavestenjeOIzvrsenojUplati
  ) {
  }

  ngOnInit(): void {
  }

}
