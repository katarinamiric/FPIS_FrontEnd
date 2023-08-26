import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StavkaRacunaOsiguranja} from '../../../model/stavka-racuna-osiguranja.model';

@Component({
  selector: 'app-add-stavka-racuna-osiguranja',
  templateUrl: './add-stavka-racuna-osiguranja.component.html',
  styleUrls: ['./add-stavka-racuna-osiguranja.component.css']
})
export class AddStavkaRacunaOsiguranjaComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialogRef: MatDialogRef<AddStavkaRacunaOsiguranjaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StavkaRacunaOsiguranja) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.patchFormValues();
    }

  }

  initForm() {
    this.form = this.formBuilder.group({
      cena: [null, [Validators.required]],
      nazivVrsteOsiguranja: [null, [Validators.required]],
    });
  }

  patchFormValues() {
    this.form.patchValue({
      cena: this.data.cena,
      nazivVrsteOsiguranja: this.data.nazivVrsteOsiguranja,
    });
  }

  saveStavka() {
    const formData = this.form.getRawValue();
    console.log(formData);
    const stavka = {
      cena: formData.cena,
      nazivVrsteOsiguranja: formData.nazivVrsteOsiguranja,
    } as StavkaRacunaOsiguranja;
    this.dialogRef.close(stavka);
  }
}
