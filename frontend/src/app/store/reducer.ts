import {Action, createReducer, on} from '@ngrx/store';
import {
  addStavkaRacuna,
  clearSelectedRacun,
  clearStavkeRacuna,
  deleteStavkaRacuna,
  getAllDrzavaSuccess,
  getAllNacinPlacanja,
  getAllNacinPlacanjaSuccess,
  getAllRacunSuccess,
  getAllRadnikSuccess,
  getAllUgovorOOsiguranjuSuccess,
  getAllObavestenjaSuccess,
  getOneRacunSuccess,
  setSelectedRacun,
  setUkupanIznos,
  getAllOsiguravajucaKucaSuccess,
  getOneObavestenje, getOneObavestenjeSuccess, getAllUplatnicaSuccess, setStavkeRacuna
} from './actions';
import {INIT_STATE, State} from './selectors';

export function reducer(state: State, action: Action) {
  const actionReducer = createReducer(
    INIT_STATE,
    on(getAllObavestenjaSuccess, (state, {obavestenja}) => ({...state, obavestenja})),
    on(getAllRadnikSuccess, (state, {radnici}) => ({...state, radnici})),
    on(getAllRacunSuccess, (state, {racuni}) => ({...state, racuni})),
    on(getAllOsiguravajucaKucaSuccess, (state, {osiguravajuceKuce}) => ({...state, osiguravajuceKuce})),
    on(getAllDrzavaSuccess, (state, {drzave}) => ({...state, drzave})),
    on(getAllUplatnicaSuccess, (state, {uplatnice}) => ({...state, uplatnice})),
    on(getAllUgovorOOsiguranjuSuccess, (state, {ugovori}) => ({...state, ugovori})),
    on(getAllNacinPlacanjaSuccess, (state, {naciniPlacanja}) => ({...state, naciniPlacanja})),
    on(getOneRacunSuccess, (state, {selectedRacun}) => ({...state, selectedRacun})),
    on(getOneObavestenjeSuccess, (state, {selectedObavestenje}) => ({...state, selectedObavestenje})),
    on(addStavkaRacuna, (state, {stavka}) => ({...state, stavke: [...state.stavke, stavka]})),
    on(deleteStavkaRacuna, (state, {stavke, ukupanIznos}) => ({
      ...state,
      stavke,
      ukupanIznos
    })),
    on(setUkupanIznos, (state, {ukupanIznos}) => ({...state, ukupanIznos})),
    on(setSelectedRacun, (state, {racun}) => ({...state, selectedRacun: racun})),
    on(setStavkeRacuna, (state, {stavke}) => ({...state, stavke})),
    on(clearSelectedRacun, (state, {}) => ({...state, selectedRacun: null})),

    on(clearStavkeRacuna, (state) => ({...state, stavke: [], ukupanIznos: 0}))
  );
  return actionReducer(state, action);
}
