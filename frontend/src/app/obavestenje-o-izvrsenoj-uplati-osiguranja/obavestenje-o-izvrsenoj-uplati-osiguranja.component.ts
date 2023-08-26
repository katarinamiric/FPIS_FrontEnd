import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {filter, takeUntil} from 'rxjs/operators';
import {
  clearSelectedRacun,
  clearStavkeRacuna,
  deleteObavestenje,
  getAllObavestenja,
  saveObavestenje
} from '../store/actions';
import {AppState} from '../store/app.state';
import {selectObavestenja} from '../store/selectors';
import {AddObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './add-obavestenje-o-izvrsenoj-uplati-osiguranja/add-obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent} from './view-obavestenje-o-izvrsenoj-uplati-osiguranja/view-obavestenje-o-izvrsenoj-uplati-osiguranja.component';
import {ToastrService} from 'ngx-toastr';
import {ObavestenjeOIzvrsenojUplati} from '../model/obavestenje-o-izvrsenoj-uplati.model';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-obavestenje-o-izvrsenoj-uplati-osiguranja',
  templateUrl: './obavestenje-o-izvrsenoj-uplati-osiguranja.component.html',
  styleUrls: ['./obavestenje-o-izvrsenoj-uplati-osiguranja.model.css']
})
export class ObavestenjeOIzvrsenojUplatiOsiguranjaComponent implements OnInit, OnChanges, OnDestroy {

  obavestenja: ObavestenjeOIzvrsenojUplati[];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadObavestenja();
  }

  ngOnInit(): void {
    this.store$.dispatch(clearSelectedRacun({}));
    this.store$.dispatch(clearStavkeRacuna({}));
    this.loadObavestenja();

    this.store$.select(selectObavestenja)
      .pipe(takeUntil(this.ngUnsubscribe), filter(Boolean))
      .subscribe((obavestenja: ObavestenjeOIzvrsenojUplati[]) => {
          if (obavestenja) {
            this.obavestenja = obavestenja;
          }
        }
      );

  }


  loadObavestenja() {
    this.store$.dispatch(getAllObavestenja({}));
  }

  addObavestenje() {
     this.router.navigate(['add'], {relativeTo: this.route});
  }

  editObavestenje(obavestenje: ObavestenjeOIzvrsenojUplati) {
    this.router.navigate(['edit/' + obavestenje.id], {relativeTo: this.route});
  }

  deleteObavestenje(obavestenje: ObavestenjeOIzvrsenojUplati) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje obavestenja',
        message: 'Da li ste sigurni da zelite da obrisete obavestenje sa ID: ' + obavestenje.id + '?'
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.store$.dispatch(deleteObavestenje({idObavestenja: obavestenje.id}));
        this.toastr.success('Uspesno obrisano obavestenje!', '', {timeOut: 2000});

        this.loadObavestenja();
      }
    });

  }

  viewObavestenje(obavestenje: ObavestenjeOIzvrsenojUplati) {
    this.dialog.open(ViewObavestenjeOIzvrsenojUplatiOsiguranjaComponent, {
      width: '800px',
      data: obavestenje
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
