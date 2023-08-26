import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Radnik} from '../model/radnik.model';
import {RacunOsiguranja} from '../model/racun-osiguranja.model';
import {Drzava} from '../model/drzava.model';
import {UgovorOOsiguranju} from '../model/ugovor-o-osiguranju.model';
import {NacinPlacanja} from '../model/nacin-placanja.model';
import {StavkaRacunaOsiguranja} from '../model/stavka-racuna-osiguranja.model';
import {ObavestenjeOIzvrsenojUplati} from '../model/obavestenje-o-izvrsenoj-uplati.model';
import {OsiguravajucaKuca} from '../model/osiguravajuce-kuca.model';
import {UplatnicaZaOsiguranje} from '../model/uplatnica-za-osiguranje.model';

export interface State {
  obavestenja: ObavestenjeOIzvrsenojUplati[];
  radnici: Radnik[];
  racuni: RacunOsiguranja[];
  drzave: Drzava[];
  ugovori: UgovorOOsiguranju[];
  naciniPlacanja: NacinPlacanja[];
  osiguravajuceKuce: OsiguravajucaKuca[];
  korisnici: Radnik[];
  selectedRacun: RacunOsiguranja;
  stavke: StavkaRacunaOsiguranja[];
  ukupanIznos: number;
  selectedObavestenje: ObavestenjeOIzvrsenojUplati;
  uplatnice: UplatnicaZaOsiguranje[];
}

export const INIT_STATE: State = {
  obavestenja: [],
  radnici: [],
  racuni: [],
  drzave: [],
  ugovori: [],
  naciniPlacanja: [],
  osiguravajuceKuce: [],
  korisnici: [],
  selectedRacun: null,
  stavke: [],
  ukupanIznos: 0,
  selectedObavestenje: null,
  uplatnice: [],
};
export const selectAppState = createFeatureSelector<State>('app');
export const getObavestenja = (state: State) => state.obavestenja;
export const getRadnici = (state: State) => state.radnici;
export const getOsiguravajuceKuce = (state: State) => state.osiguravajuceKuce;
export const getRacuni = (state: State) => state.racuni;
export const getDrzave = (state: State) => state.drzave;
export const getUgovori = (state: State) => state.ugovori;
export const getNaciniPlacanja = (state: State) => state.naciniPlacanja;
export const getSelectedRacun = (state: State) => state.selectedRacun;
export const getStavke = (state: State) => state.stavke;
export const getUkupanIznos = (state: State) => state.ukupanIznos;
export const getSelectedObavestenje = (state: State) => state.selectedObavestenje;
export const getUplatnice = (state: State) => state.uplatnice;


export const selectObavestenja: MemoizedSelector<object, any> = createSelector(selectAppState, getObavestenja);
export const selectRadnici: MemoizedSelector<object, any> = createSelector(selectAppState, getRadnici);
export const selectOsiguravajuceKuce: MemoizedSelector<object, any> = createSelector(selectAppState, getOsiguravajuceKuce);
export const selectRacuni: MemoizedSelector<object, any> = createSelector(selectAppState, getRacuni);
export const selectDrzave: MemoizedSelector<object, any> = createSelector(selectAppState, getDrzave);
export const selectUgovori: MemoizedSelector<object, any> = createSelector(selectAppState, getUgovori);
export const selectNaciniPlacanja: MemoizedSelector<object, any> = createSelector(selectAppState, getNaciniPlacanja);
export const selectSelectedRacun: MemoizedSelector<object, any> = createSelector(selectAppState, getSelectedRacun);
export const selectStavke: MemoizedSelector<object, any> = createSelector(selectAppState, getStavke);
export const selectUkupanIznos: MemoizedSelector<object, any> = createSelector(selectAppState, getUkupanIznos);
export const selectSelectedObavestenje: MemoizedSelector<object, any> = createSelector(selectAppState, getSelectedObavestenje);
export const selectUplatnice: MemoizedSelector<object, any> = createSelector(selectAppState, getUplatnice);
