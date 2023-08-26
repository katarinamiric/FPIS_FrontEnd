import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {MatDialogRef} from '@angular/material/dialog';
import {selectUgovori} from '../../store/selectors';
import {filter, takeUntil} from 'rxjs/operators';
import {getAllUgovorOOsiguranju} from '../../store/actions';
import {UgovorOOsiguranju} from '../../model/ugovor-o-osiguranju.model';

@Component({
  selector: 'app-pretraga-ugovora',
  templateUrl: './pretraga-ugovora.component.html',
  styleUrls: ['./pretraga-ugovora.component.css']
})
export class PretragaUgovoraComponent implements OnInit {
  ugovori: UgovorOOsiguranju[];
  selectedUgovor: UgovorOOsiguranju;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>,
              private dialogRef: MatDialogRef<PretragaUgovoraComponent>) {

    this.store$.select(selectUgovori)
      .pipe(takeUntil(this.ngUnsubscribe), filter(Boolean))
      .subscribe((ugovori: UgovorOOsiguranju[]) => {
          if (ugovori) {
            this.ugovori = ugovori;
          }
        }
      );
  }

  ngOnInit() {
    this.store$.dispatch(getAllUgovorOOsiguranju({}));
  }

  izaberiUgovor() {
    this.dialogRef.close(this.selectedUgovor);
  }
}

