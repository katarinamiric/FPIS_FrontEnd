import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import {
  deleteObavestenje,
  deleteObavestenjeError,
  deleteObavestenjeSuccess,
  deleteRacun,
  deleteRacunError,
  deleteRacunSuccess, editRacun, editRacunError, editRacunSuccess,
  getAllDrzava,
  getAllDrzavaError,
  getAllDrzavaSuccess,
  getAllNacinPlacanja,
  getAllNacinPlacanjaError,
  getAllNacinPlacanjaSuccess,
  getAllObavestenja,
  getAllObavestenjaError,
  getAllObavestenjaSuccess,
  getAllOsiguravajucaKuca,
  getAllOsiguravajucaKucaError,
  getAllOsiguravajucaKucaSuccess,
  getAllRacun,
  getAllRacunError,
  getAllRacunSuccess,
  getAllRadnik,
  getAllRadnikError,
  getAllRadnikSuccess,
  getAllUgovorOOsiguranju,
  getAllUgovorOOsiguranjuError,
  getAllUgovorOOsiguranjuSuccess,
  getAllUplatnica,
  getAllUplatnicaError,
  getAllUplatnicaSuccess,
  getOneObavestenje, getOneObavestenjeError,
  getOneObavestenjeSuccess,
  getOneRacun,
  getOneRacunError,
  getOneRacunSuccess,
  saveObavestenje,
  saveObavestenjeError,
  saveObavestenjeSuccess,
  saveRacun,
  saveRacunError,
  saveRacunSuccess,
  updateObavestenje,
  updateObavestenjeError,
  updateObavestenjeSuccess
} from './actions';
import {Api} from '../api/api';
import {of} from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class EffectsUplatnica {
  constructor(
    private action$: Actions,
    private api: Api,
    private toastr: ToastrService
  ) {
  }

  getAllObavestenjaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllObavestenja),
    switchMap(() => this.api.getAllObavestenja().pipe(
      switchMap(obavestenja => of(
        getAllObavestenjaSuccess({obavestenja}),
      )),
      catchError(error => of(
        getAllObavestenjaError({error}),
      ))
    ))
  ));

  getAllUplatnicaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllUplatnica),
    switchMap(() => this.api.getAllUplatnica().pipe(
      switchMap(uplatnice => of(
        getAllUplatnicaSuccess({uplatnice}),
      )),
      catchError(error => of(
        getAllUplatnicaError({error}),
      ))
    ))
  ));

  getAllRadnikEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllRadnik),
    switchMap(() => this.api.getAllRadnik().pipe(
      switchMap(radnici => of(
        getAllRadnikSuccess({radnici}),
      )),
      catchError(error => of(
        getAllRadnikError({error}),
      ))
    ))
  ));

  getAllNaciniPlacanjaEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllNacinPlacanja),
    switchMap(() => this.api.getAllNacinPlacanja().pipe(
      switchMap(modeli => of(
        getAllNacinPlacanjaSuccess({naciniPlacanja: modeli}),
      )),
      catchError(error => of(
        getAllNacinPlacanjaError({error}),
      ))
    ))
  ));

  getAllUgovoriEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllUgovorOOsiguranju),
    switchMap(() => this.api.getAllUgovorOOsiguranju().pipe(
      switchMap(ugovori => of(
        getAllUgovorOOsiguranjuSuccess({ugovori}),
      )),
      catchError(error => of(
        getAllUgovorOOsiguranjuError({error}),
      ))
    ))
  ));

  getAllRacunEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllRacun),
    switchMap(() => this.api.getAllRacun().pipe(
      switchMap(racuni => of(
        getAllRacunSuccess({racuni}),
      )),
      catchError(error => of(
        getAllRacunError({error}),
      ))
    ))
  ));

  getAllOsigKuceEffect$ = createEffect(() => this.action$.pipe(
    ofType(getAllOsiguravajucaKuca),
    switchMap(() => this.api.getAllOsiguravajucaKuca().pipe(
      switchMap(osigKuce => of(
        getAllOsiguravajucaKucaSuccess({osiguravajuceKuce: osigKuce}),
      )),
      catchError(error => of(
        getAllOsiguravajucaKucaError({error}),
      ))
    ))
  ));

  getOneRacunEffect$ = createEffect(() => this.action$.pipe(
    ofType(getOneRacun),
    switchMap((action) => this.api.getOneRacun(action.brojRacuna).pipe(
      switchMap(racun => of(
        getOneRacunSuccess({selectedRacun: racun}),
      )),
      catchError(error => of(
        getOneRacunError({error}),
      ))
    ))
  ));

  getOneObavestenjeEffect$ = createEffect(() => this.action$.pipe(
    ofType(getOneObavestenje),
    switchMap((action) => this.api.getOneObavestenje(action.id).pipe(
      switchMap(obavestenje => of(
        getOneObavestenjeSuccess({selectedObavestenje: obavestenje}),
      )),
      catchError(error => of(
        getOneObavestenjeError({error}),
      ))
    ))
  ));


  saveObavestenjeEffect$ = createEffect(() => this.action$.pipe(
    ofType(saveObavestenje),
    switchMap((action) => this.api.saveObavestenje(action.obavestenje).pipe(
      switchMap(obavestenje => of(
        saveObavestenjeSuccess({obavestenje}),
        getAllObavestenja({})
      )),
      catchError(error => of(
        saveObavestenjeError({error}),
      ))
    ))
  ));

  deleteObavestenjeEffect$ = createEffect(() => this.action$.pipe(
    ofType(deleteObavestenje),
    switchMap((action) => this.api.deleteObavestenje(action.idObavestenja).pipe(
      switchMap(() => of(
        deleteObavestenjeSuccess({idObavestenja: action.idObavestenja}),
        getAllObavestenja({})
      )),
      catchError(error => of(
        deleteObavestenjeError({error}),
      ))
    ))
  ));



  saveRacunEffect$ = createEffect(() => this.action$.pipe(
    ofType(saveRacun),
    switchMap((action) => this.api.saveRacun(action.racun).pipe(
      switchMap(racun => of(
        saveRacunSuccess({racun}),
        getAllRacun({})
      )),
      catchError(error => of(
        saveRacunError({error}),
      ))
    ))
  ));

  editRacunEffect$ = createEffect(() => this.action$.pipe(
    ofType(editRacun),
    switchMap((action) => this.api.editRacun(action.racun).pipe(
      switchMap(racun => of(
        editRacunSuccess({racun}),
        getAllRacun({})
      )),
      catchError(error => of(
        editRacunError({error}),
      ))
    ))
  ));


  updateObavestenjeEffect$ = createEffect(() => this.action$.pipe(
    ofType(updateObavestenje),
    switchMap((action) => this.api.updateObavestenje(action.obavestenje).pipe(
      switchMap(obavestenje => of(
        updateObavestenjeSuccess({obavestenje}),
        getAllObavestenja({}),
)),
      catchError(error => of(
        updateObavestenjeError({error}),
      ))
    ))
  ));

  deleteRacunEffect$ = createEffect(() => this.action$.pipe(
    ofType(deleteRacun),
    switchMap((action) => this.api.deleteRacun(action.brojRacuna).pipe(
      switchMap(() => of(
        deleteRacunSuccess({brojRacuna: action.brojRacuna}),
        getAllRacun({})
      )),
      catchError(error => of(
        deleteRacunError({error}),
      ))
    ))
  ));


}
