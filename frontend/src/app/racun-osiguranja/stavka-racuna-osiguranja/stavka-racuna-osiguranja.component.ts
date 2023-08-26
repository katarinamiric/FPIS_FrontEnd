import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {MatDialog} from '@angular/material/dialog';
import {addStavkaRacuna, deleteStavkaRacuna, setUkupanIznos} from '../../store/actions';
import {ConfirmDialogComponent} from '../../obavestenje-o-izvrsenoj-uplati-osiguranja/confirm-dialog/confirm-dialog.component';
import {AddStavkaRacunaOsiguranjaComponent} from './add-stavka-racuna-osiguranja/add-stavka-racuna-osiguranja.component';
import {selectStavke} from '../../store/selectors';
import {filter, takeUntil} from 'rxjs/operators';
import {StavkaRacunaOsiguranja} from '../../model/stavka-racuna-osiguranja.model';

@Component({
  selector: 'app-stavka-racuna',
  templateUrl: './stavka-racuna-osiguranja.component.html',
  styleUrls: ['./stavka-racuna-osiguranja.component.css']
})
export class StavkaRacunaOsiguranjaComponent implements OnInit, OnDestroy {

  stavke: StavkaRacunaOsiguranja[] = [];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  ukupanIznos = 0;

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.stavke = [];
    this.loadStavke();
  }


  addStavka() {
    this.dialog.open(AddStavkaRacunaOsiguranjaComponent, {
      disableClose: true,
      width: '700px',
    }).afterClosed().subscribe(stavka => {
      if (stavka) {
        this.store$.dispatch(addStavkaRacuna({stavka}));
        this.saberiStavke(this.stavke);
        this.store$.dispatch(setUkupanIznos({ukupanIznos: this.ukupanIznos}));
      }
    });
  }

  loadStavke() {
    this.store$.select(selectStavke)
      .pipe(takeUntil(this.ngUnsubscribe), filter(Boolean))
      .subscribe((stavke: StavkaRacunaOsiguranja[]) => {
            this.stavke = stavke;
        }
      );
  }

  saberiStavke(stavke: StavkaRacunaOsiguranja[]) {
    this.ukupanIznos = 0;
    stavke.forEach(stavka => {
      this.ukupanIznos += +stavka.cena;
    });

  }

  editStavka(stavka: StavkaRacunaOsiguranja, i: number) {
    this.dialog.open(AddStavkaRacunaOsiguranjaComponent, {
      disableClose: true,
      width: '700px',
      data: stavka
    }).afterClosed().subscribe(stavkaRacuna => {
      if (stavkaRacuna) {
        this.stavke.splice(i, 1);
        this.stavke.push(stavkaRacuna);
        this.saberiStavke(this.stavke);
        this.store$.dispatch(deleteStavkaRacuna({stavke: this.stavke, ukupanIznos: this.ukupanIznos}));
      }
    });
  }

  deleteStavka(stavka: StavkaRacunaOsiguranja, i: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje stavke',
        message: 'Da li ste sigurni da zelite da obrisete stavku sa nazivom vrste osiguranja: ' + stavka.nazivVrsteOsiguranja + '?'
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.stavke.splice(i, 1);
        this.saberiStavke(this.stavke);
        this.store$.dispatch(deleteStavkaRacuna({stavke: this.stavke, ukupanIznos: this.ukupanIznos}));
      }
    });

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
