import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {MatDialog} from '@angular/material/dialog';
import {selectRacuni} from '../store/selectors';
import {takeUntil} from 'rxjs/operators';
import {
  clearSelectedRacun,
  clearStavkeRacuna,
  deleteRacun,
  deleteStavkaRacuna,
  getAllRacun, getOneRacun,
  setSelectedRacun
} from '../store/actions';
import {ConfirmDialogComponent} from '../obavestenje-o-izvrsenoj-uplati-osiguranja/confirm-dialog/confirm-dialog.component';
import {RacunOsiguranja} from '../model/racun-osiguranja.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewRacunOsiguranjaComponent} from './view-racun-osiguranja/view-racun-osiguranja.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-racun-osiguranja',
  templateUrl: './racun-osiguranja.component.html',
  styleUrls: ['./racun-osiguranja.component.css']
})
export class RacunOsiguranjaComponent implements OnInit, OnChanges, OnDestroy {


  racuni: RacunOsiguranja[];
  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadRacuni();
  }

  ngOnInit(): void {
    this.store$.dispatch(clearSelectedRacun({}));
    this.store$.dispatch(clearStavkeRacuna({}));
    this.loadRacuni();

    this.store$.select(selectRacuni)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((racuni: RacunOsiguranja[]) => {
          if (racuni) {
            this.racuni = racuni;
          }
        }
      );
  }

  loadRacuni() {
    this.store$.dispatch(getAllRacun({}));
  }

  addRacun() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  editRacun(racun: RacunOsiguranja) {
    this.router.navigate(['edit/' + racun.id], {relativeTo: this.route});
  }

  viewRacun(racun: RacunOsiguranja) {
    this.dialog.open(ViewRacunOsiguranjaComponent, {
      width: '1200px',
      data: racun.id
    });
  }

  deleteRacun(racun: RacunOsiguranja) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Brisanje racuna',
        message: 'Da li ste sigurni da zelite da obrisete racun sa id-em: ' + racun.id + '? '
      },
      autoFocus: false
    }).afterClosed().subscribe(answer => {
      if (answer) {
        this.store$.dispatch(deleteRacun({brojRacuna: racun.id}));
        this.toastr.success('Uspesno obrisan racun!', '', {timeOut: 2000});

        this.loadRacuni();
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
