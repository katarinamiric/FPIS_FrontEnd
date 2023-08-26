import {Component, Inject, OnInit} from '@angular/core';
import {RacunOsiguranja} from '../../model/racun-osiguranja.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {getOneRacun} from "../../store/actions";
import {selectSelectedRacun} from "../../store/selectors";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-view-racun-osiguranja',
  templateUrl: './view-racun-osiguranja.component.html',
  styleUrls: ['./view-racun-osiguranja.component.css']
})
export class ViewRacunOsiguranjaComponent implements OnInit {
  racun: RacunOsiguranja;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private dialogRef: MatDialogRef<ViewRacunOsiguranjaComponent>,
              private store$: Store<AppState>,
              @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    console.log('const'
    )
    this.store$.select(selectSelectedRacun)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((racun: RacunOsiguranja) => {
          if (racun) {
            console.log(racun)
            this.racun = racun;
          }
        }
      );
  }

  ngOnInit(): void {
    console.log('ngoninit'
    )
    this.store$.dispatch(getOneRacun({brojRacuna: this.data}))
  }


}
