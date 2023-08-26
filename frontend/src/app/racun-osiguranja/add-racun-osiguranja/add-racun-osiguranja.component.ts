import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Radnik} from '../../model/radnik.model';
import {UgovorOOsiguranju} from '../../model/ugovor-o-osiguranju.model';
import {NacinPlacanja} from '../../model/nacin-placanja.model';
import {RacunOsiguranja} from '../../model/racun-osiguranja.model';
import {
  clearSelectedRacun,
  clearStavkeRacuna,
  editRacun,
  getAllNacinPlacanja,
  getAllRadnik,
  getAllUgovorOOsiguranju,
  getOneRacun,
  saveRacun, setStavkeRacuna
} from '../../store/actions';
import {
  selectNaciniPlacanja,
  selectRadnici,
  selectSelectedRacun,
  selectStavke,
  selectUgovori,
  selectUkupanIznos
} from '../../store/selectors';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Subject} from 'rxjs';
import {StavkaRacunaOsiguranja} from '../../model/stavka-racuna-osiguranja.model';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {PretragaUgovoraComponent} from "../pretraga-ugovora/pretraga-ugovora.component";

@Component({
  selector: 'app-add-racun-osiguranja',
  templateUrl: './add-racun-osiguranja.component.html',
  styleUrls: ['./add-racun-osiguranja.component.css']
})
export class AddRacunOsiguranjaComponent implements OnInit {
  form: FormGroup;
  racun: RacunOsiguranja;
  stavke: StavkaRacunaOsiguranja[];
  ugovori: UgovorOOsiguranju[];
  radnici: Radnik[];
  naciniPlacanja: NacinPlacanja[];
  iznos: number;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
    this.initForm();

    if (this.route.snapshot.params.racunId) {
      this.store$.select(selectSelectedRacun)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((racun: RacunOsiguranja) => {
            if (racun) {
              this.racun = racun;
              this.store$.dispatch(setStavkeRacuna({stavke: this.racun.stavke}));
              this.patchFormValues();
            }
          }
        );
    }
  }

  ngOnInit() {
    if (this.route.snapshot.params.racunId) {
      const racunId = this.route.snapshot.params.racunId;
      this.store$.dispatch(getOneRacun({brojRacuna: racunId}));
    }
    this.store$.dispatch(getAllUgovorOOsiguranju({}));
    this.store$.select(selectUgovori)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((ugovori: UgovorOOsiguranju[]) => {
          if (ugovori) {
            this.ugovori = ugovori;
          }
        }
      );

    this.store$.dispatch(getAllNacinPlacanja({}));
    this.store$.select(selectNaciniPlacanja)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((nacini: NacinPlacanja[]) => {
          if (nacini) {
            this.naciniPlacanja = nacini;
          }
        }
      );

    this.store$.dispatch(getAllRadnik({}));
    this.store$.select(selectRadnici)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((radnici: Radnik[]) => {
          if (radnici) {
            this.radnici = radnici;
          }
        }
      );

    this.store$.select(selectUkupanIznos)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((iznos: number) => {
          this.iznos = iznos;
          this.patchIznos();
        }
      );
  }

  patchFormValues() {
    this.stavke = this.racun.stavke;
    this.form.patchValue({
      id: this.racun.id,
      iznos: this.racun.iznos,
      datum: new Date(this.racun.datum),
      pozivNaBroj: this.racun.pozivNaBroj,
      radnik: this.racun.radnik,
      brojUgovora: this.racun.ugovor.id,
      sifraZahteva: this.racun.ugovor.sifraZahteva,
      stavke: this.stavke,
      nacinPlacanja: this.racun.nacinPlacanja,
    });
  }

  saveRacun() {
    const formData = this.form.getRawValue();
    this.store$.select(selectStavke)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((stavke: StavkaRacunaOsiguranja[]) => {
          if (stavke) {
            this.stavke = stavke;
          }
        }
      );
    const racun = {
      id: formData.id,
      pozivNaBroj: formData.pozivNaBroj,
      datum: new Date(formData.datum),
      brojUgovora: formData.brojUgovora,
      nacinPlacanjaId: formData.nacinPlacanja.id,
      sifraRadnika: formData.radnik.id,
      stavke: this.stavke,
      iznos: formData.iznos,
    } as RacunOsiguranja;

    if (this.route.snapshot.params.racunId) {
      this.store$.dispatch(editRacun({racun}))
    } else {
      this.store$.dispatch(saveRacun({racun}));
    }
    this.router.navigate(['racun'],);
    this.toastr.success('Uspesno sacuvan racun!', '', {timeOut: 2000});
    this.store$.dispatch(clearStavkeRacuna({}));
    this.store$.dispatch(clearSelectedRacun({}));
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      id: [null],
      iznos: [{value: this.iznos, disabled: true}],
      datum: [null, [Validators.required]],
      pozivNaBroj: [null, [Validators.required]],
      radnik: [null, [Validators.required]],
      stavkeRacuna: [null],
      brojUgovora: [{value: null, disabled: true}],
      sifraZahteva: [{value: null, disabled: true}],
      nacinPlacanja: [null, [Validators.required]],
    });

  }

  patchIznos() {
    this.form.patchValue({
      iznos: this.iznos,
    });
  }


  openPretragaUgovoraDialog(): void {
    this.dialog.open(PretragaUgovoraComponent, {
      disableClose: true,
      width: '80%',
    }).afterClosed().subscribe((selectedUgovor: UgovorOOsiguranju) => {
      if (selectedUgovor) {
        this.form.patchValue({
          brojUgovora: selectedUgovor.id,
          sifraZahteva: selectedUgovor.sifraZahteva,
        });
      }
    });
  }

  compareFunctionRadnik(o1: Radnik, o2: Radnik) {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
  }

  compareFunctionUgovor(o1: UgovorOOsiguranju, o2: UgovorOOsiguranju) {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
  }

  compareFunctionNaciniPlacanja(o1: NacinPlacanja, o2: NacinPlacanja) {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
  }
}
