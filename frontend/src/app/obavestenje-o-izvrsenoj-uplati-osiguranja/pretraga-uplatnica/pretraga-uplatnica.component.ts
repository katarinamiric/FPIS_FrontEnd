import {Component, OnInit} from '@angular/core';
import {UplatnicaZaOsiguranje} from '../../model/uplatnica-za-osiguranje.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {MatDialogRef} from '@angular/material/dialog';
import {getAllUplatnica} from '../../store/actions';
import {selectUplatnice} from '../../store/selectors';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-pretraga-uplatnica',
  templateUrl: './pretraga-uplatnica.component.html',
  styleUrls: ['./pretraga-uplatnica.component.css']
})
export class PretragaUplatnicaComponent implements OnInit {
  uplatnice: UplatnicaZaOsiguranje[];
  selectedUplatnica: UplatnicaZaOsiguranje;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>,
              private dialogRef: MatDialogRef<PretragaUplatnicaComponent>) {

    this.store$.select(selectUplatnice)
      .pipe(takeUntil(this.ngUnsubscribe), filter(Boolean))
      .subscribe((uplatnice: UplatnicaZaOsiguranje[]) => {
            this.uplatnice = uplatnice;
        }
      );
  }

  ngOnInit() {
    this.store$.dispatch(getAllUplatnica({}));
  }

  izaberiUplatnicu() {
    this.dialogRef.close(this.selectedUplatnica);
  }
}
