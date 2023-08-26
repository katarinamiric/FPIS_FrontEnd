import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Valuta} from '../../model/valuta.model';
import {Model} from '../../model/model.model';
import {Radnik} from '../../model/radnik.model';
import {
  getAllOsiguravajucaKuca,
  getAllRadnik,
  getOneObavestenje,
  saveObavestenje,
  updateObavestenje
} from '../../store/actions';
import {selectOsiguravajuceKuce, selectRadnici, selectSelectedObavestenje} from '../../store/selectors';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {ObavestenjeOIzvrsenojUplati} from '../../model/obavestenje-o-izvrsenoj-uplati.model';
import {OsiguravajucaKuca} from '../../model/osiguravajuce-kuca.model';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {PretragaUplatnicaComponent} from "../pretraga-uplatnica/pretraga-uplatnica.component";
import {UplatnicaZaOsiguranje} from "../../model/uplatnica-za-osiguranje.model";

export const DATE_FORMAT = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@Component({
  selector: 'app-add-obavestenje-o-izvrsenoj-uplati-osiguranja',
  templateUrl: './add-obavestenje-o-izvrsenoj-uplati-osiguranja.component.html',
  styleUrls: ['./add-obavestenje-o-izvrsenoj-uplati-osiguranja.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT},
  ]
})
export class AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent implements OnInit {

  form: FormGroup;
  valute: Valuta[];
  modeli: Model[];
  radnici: Radnik[];
  selectedObavestenje: ObavestenjeOIzvrsenojUplati;
  osiguravajuceKuce: OsiguravajucaKuca[];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router,
              private toastr: ToastrService) {

    this.initForm();
    if (this.route.snapshot.params.obavestenjeId) {
      this.store$.select(selectSelectedObavestenje)
        .pipe(takeUntil(this.ngUnsubscribe), filter(Boolean))
        .subscribe((obavestenje: ObavestenjeOIzvrsenojUplati) => {
            if (obavestenje) {
              this.selectedObavestenje = obavestenje;
              this.patchFormValues();
            }
          }
        );
    }
  }

  ngOnInit(): void {
    this.dispatchActions();
    this.initSelectors();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      svrhaObavestenja: [null, [Validators.required]],
      datum: [null, [Validators.required]],
      idUplatnice: [{ value: null, disabled: true }],
      svrhaUplatnice: [{ value: null, disabled: true }],
      iznosUplatnice: [{ value: null, disabled: true }],
      osiguravajucaKuca: [null, [Validators.required]],
      radnik: [null, [Validators.required]],
    });
  }

  private dispatchActions() {
    if (this.route.snapshot.params.obavestenjeId) {
      const obavestenjeId = this.route.snapshot.params.obavestenjeId;
      this.store$.dispatch(getOneObavestenje({id: obavestenjeId}));
    }

    this.store$.dispatch(getAllRadnik({}));
    this.store$.dispatch(getAllOsiguravajucaKuca({}));
  }

  private initSelectors() {
    this.store$.select(selectRadnici)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((radnici: Radnik[]) => {
          if (radnici) {
            this.radnici = radnici;
          }
        }
      );

    this.store$.select(selectOsiguravajuceKuce)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((osigKuce: OsiguravajucaKuca[]) => {
          if (osigKuce) {
            this.osiguravajuceKuce = osigKuce;
          }
        }
      );
  }

  patchFormValues() {
    this.form.patchValue({
      id: this.selectedObavestenje.id,
      svrhaObavestenja: this.selectedObavestenje.svrhaObavestenja,
      datum: this.selectedObavestenje.datum,
      idUplatnice: this.selectedObavestenje.idUplatnice,
      iznosUplatnice: this.selectedObavestenje.uplatnica.iznos,
      svrhaUplatnice: this.selectedObavestenje.uplatnica.svrhaUplate,
      valuta: this.selectedObavestenje.valuta,
      model: this.selectedObavestenje.model,
      osiguravajucaKuca: this.selectedObavestenje.osiguravajucaKuca,
      radnik: this.selectedObavestenje.radnik,
    });
  }

  saveObavestenje() {
    const formData = this.form.getRawValue();

    const obavestenje = {
      id: formData.id,
      svrhaObavestenja: formData.svrhaObavestenja,
      datum: formData.datum,
      idUplatnice: formData.idUplatnice,
      valuta: formData.valuta,
      model: formData.model,
      idOsigKuce: formData.osiguravajucaKuca.id,
      sifraRadnika: formData.radnik.id,
    } as ObavestenjeOIzvrsenojUplati;


    if (this.route.snapshot.params.obavestenjeId) {
      this.store$.dispatch(updateObavestenje({obavestenje}));
    } else {
      this.store$.dispatch(saveObavestenje({obavestenje}));
    }
    this.router.navigate(['/obavestenje']);
    this.toastr.success('Uspesno sacuvano obavestenje!', '', {timeOut: 2000});
  }

  openPretragaUplatniceDialog(): void {
    this.dialog.open(PretragaUplatnicaComponent, {
      disableClose: true,
      width: '80%',
    }).afterClosed().subscribe((selectedUplatnica: UplatnicaZaOsiguranje) => {
      if (selectedUplatnica) {
        this.form.patchValue({
          svrhaUplatnice: selectedUplatnica.svrhaUplate,
          idUplatnice: selectedUplatnica.id,
          iznosUplatnice: selectedUplatnica.iznos
        });
      }
    });
  }

  navigateBack() {
    this.router.navigate(['/obavestenje']);
  }

  compareFunctionRadnik(o1: Radnik, o2: Radnik) {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
  }

  compareFunctionOsigKuca(o1: OsiguravajucaKuca, o2: OsiguravajucaKuca) {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
  }


}
