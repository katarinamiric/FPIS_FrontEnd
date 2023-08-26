import {createAction, props} from '@ngrx/store';
import {Valuta} from '../model/valuta.model';
import {Model} from '../model/model.model';
import {Radnik} from '../model/radnik.model';
import {RacunOsiguranja} from '../model/racun-osiguranja.model';
import {Drzava} from '../model/drzava.model';
import {NacinPlacanja} from '../model/nacin-placanja.model';
import {UgovorOOsiguranju} from '../model/ugovor-o-osiguranju.model';
import {StavkaRacunaOsiguranja} from '../model/stavka-racuna-osiguranja.model';
import {ObavestenjeOIzvrsenojUplati} from '../model/obavestenje-o-izvrsenoj-uplati.model';
import {OsiguravajucaKuca} from "../model/osiguravajuce-kuca.model";
import {UplatnicaZaOsiguranje} from "../model/uplatnica-za-osiguranje.model";


export const GetAllObavestenja = '[Obavestenje] Get All Obavestenje ';
export const GetAllObavestenjaSuccess = '[Obavestenje] Get All Obavestenje Success';
export const GetAllObavestenjaError = '[Obavestenje] Get All Obavestenje Error';

export const SaveObavestenje = '[Obavestenje] Save Obavestenje';
export const SaveObavestenjeSuccess = '[Obavestenje] Save Obavestenje Success';
export const SaveObavestenjeError = '[Obavestenje] Save Obavestenje Error';

export const DeleteObavestenje = '[Obavestenje] Delete Obavestenje';
export const DeleteObavestenjeSuccess = '[Obavestenje] Delete Obavestenje Success';
export const DeleteObavestenjeError = '[Obavestenje] Delete Obavestenje Error';

export const UpdateObavestenje = '[Obavestenje] Update Obavestenje';
export const UpdateObavestenjeSuccess = '[Obavestenje] Update Obavestenje Success';
export const UpdateObavestenjeError = '[Obavestenje] Update Obavestenje Error';

export const GetAllDrzava = '[Racun] Get All Drzava';
export const GetAllDrzavaSuccess = '[Racun] Get All Drzava Success';
export const GetAllDrzavaError = '[Racun] Get All Drzava Error';

export const GetAllNacinPlacanja = '[Racun] Get All NacinPlacanja';
export const GetAllNacinPlacanjaSuccess = '[Racun] Get All NacinPlacanja Success';
export const GetAllNacinPlacanjaError = '[Racun] Get All NacinPlacanja Error';

export const GetAllUgovorOOsiguranju = '[Obavestenje] GeGetAllUgovorOOsiguranju';
export const GetAllUgovorOOsiguranjuSuccess = '[Obavestenje] GeGetAllUgovorOOsiguranju Success';
export const GetAllUgovorOOsiguranjuError = '[Obavestenje] GeGetAllUgovorOOsiguranju Error';

export const GetOneRacun = '[Obavestenje] Get One Racun';
export const GetOneRacunSuccess = '[Obavestenje] Get One Racun Success';
export const GetOneRacunError = '[Obavestenje] Get One Racun Error';

export const GetOneObavestenje = '[Obavestenje] Get One Obavestenje';
export const GetOneObavestenjeSuccess = '[Obavestenje] Get One Obavestenje Success';
export const GetOneObavestenjeError = '[Obavestenje] Get One Obavestenje Error';

export const GetAllRadnik = '[Obavestenje] Get All Radnik';
export const GetAllRadnikSuccess = '[Obavestenje] Get All Radnik Success';
export const GetAllRadnikError = '[Obavestenje] Get All Radnik Error';

export const GetAllUplatnica = '[Obavestenje] Get All Uplatnica';
export const GetAllUplatnicaSuccess = '[Obavestenje] Get All Uplatnica Success';
export const GetAllUplatnicaError = '[Obavestenje] Get All Uplatnica Error';

export const GetAllOsiguravajucaKuca = '[Obavestenje] Get All Osiguravajuca Kuca';
export const GetAllOsiguravajucaKucaSuccess = '[Obavestenje] Get All Osiguravajuca Kuca Success';
export const GetAllOsiguravajucaKucaError = '[Obavestenje] Get All Osiguravajuca Kuca Error';

export const GetAllRacun = '[Racun] Get All Radnik';
export const GetAllRacunSuccess = '[Racun] Get All Radnik Success';
export const GetAllRacunError = '[Racun] Get All Radnik Error';

export const SaveRacun = '[Racun] Save Racun';
export const SaveRacunSuccess = '[Racun] Save Racun Success';
export const SaveRacunError = '[Racun] Save Racun Error';

export const EditRacun = '[Racun] Edit Racun';
export const EditRacunSuccess = '[Racun] Edit Racun Success';
export const EditRacunError = '[Racun] Edit Racun Error';

export const AddStavka = '[Racun] Add Stavka Racuna';
export const DeleteStavka = '[Racun] Delete Stavka Racuna';
export const SetStavkeRacuna = '[Racun] Set Stavke Racuna';

export const DeleteRacun = '[Racun] Delete Racun';
export const DeleteRacunSuccess = '[Racun] Delete Racun Success';
export const DeleteRacunError = '[Racun] Delete Racun Error';

export const SetUkupanIznos = '[Racun] Set ukupan iznos';
export const ClearStavkeRacuna = '[Racun] Clear stavke racuna';
export const ClearSelectedRacun = '[Racun] Clear selected racuna';
export const SetSelectedRacun = '[Racun] Set selected racuna';

export const getAllObavestenja = createAction(GetAllObavestenja, props<{}>());
export const getAllObavestenjaSuccess = createAction(GetAllObavestenjaSuccess, props<{ obavestenja: ObavestenjeOIzvrsenojUplati[] }>());
export const getAllObavestenjaError = createAction(GetAllObavestenjaError, props<{ error: string }>());

export const saveObavestenje = createAction(SaveObavestenje, props<{ obavestenje: ObavestenjeOIzvrsenojUplati }>());
export const saveObavestenjeSuccess = createAction(SaveObavestenjeSuccess, props<{ obavestenje: ObavestenjeOIzvrsenojUplati }>());
export const saveObavestenjeError = createAction(SaveObavestenjeError, props<{ error: string }>());

export const updateObavestenje = createAction(UpdateObavestenje, props<{ obavestenje: ObavestenjeOIzvrsenojUplati }>());
export const updateObavestenjeSuccess = createAction(UpdateObavestenjeSuccess, props<{ obavestenje: ObavestenjeOIzvrsenojUplati }>());
export const updateObavestenjeError = createAction(UpdateObavestenjeError, props<{ error: string }>());

export const deleteObavestenje = createAction(DeleteObavestenje, props<{ idObavestenja: number }>());
export const deleteObavestenjeSuccess = createAction(DeleteObavestenjeSuccess, props<{ idObavestenja: number }>());
export const deleteObavestenjeError = createAction(DeleteObavestenjeError, props<{ error: string }>());

export const getAllRadnik = createAction(GetAllRadnik, props<{}>());
export const getAllRadnikSuccess = createAction(GetAllRadnikSuccess, props<{ radnici: Radnik[] }>());
export const getAllRadnikError = createAction(GetAllRadnikError, props<{ error: string }>());

export const getAllUplatnica = createAction(GetAllUplatnica, props<{}>());
export const getAllUplatnicaSuccess = createAction(GetAllUplatnicaSuccess, props<{ uplatnice: UplatnicaZaOsiguranje[] }>());
export const getAllUplatnicaError = createAction(GetAllUplatnicaError, props<{ error: string }>());

export const getAllRacun = createAction(GetAllRacun, props<{}>());
export const getAllRacunSuccess = createAction(GetAllRacunSuccess, props<{ racuni: RacunOsiguranja[] }>());
export const getAllRacunError = createAction(GetAllRacunError, props<{ error: string }>());

export const getAllDrzava = createAction(GetAllDrzava, props<{}>());
export const getAllDrzavaSuccess = createAction(GetAllDrzavaSuccess, props<{ drzave: Drzava[] }>());
export const getAllDrzavaError = createAction(GetAllDrzavaError, props<{ error: string }>());

export const getAllOsiguravajucaKuca = createAction(GetAllOsiguravajucaKuca, props<{}>());
export const getAllOsiguravajucaKucaSuccess = createAction(GetAllOsiguravajucaKucaSuccess, props<{ osiguravajuceKuce: OsiguravajucaKuca[] }>());
export const getAllOsiguravajucaKucaError = createAction(GetAllOsiguravajucaKucaError, props<{ error: string }>());

export const getAllNacinPlacanja = createAction(GetAllNacinPlacanja, props<{}>());
export const getAllNacinPlacanjaSuccess = createAction(GetAllNacinPlacanjaSuccess, props<{ naciniPlacanja: NacinPlacanja[] }>());
export const getAllNacinPlacanjaError = createAction(GetAllNacinPlacanjaError, props<{ error: string }>());

export const getAllUgovorOOsiguranju = createAction(GetAllUgovorOOsiguranju, props<{}>());
export const getAllUgovorOOsiguranjuSuccess = createAction(GetAllUgovorOOsiguranjuSuccess, props<{ ugovori: UgovorOOsiguranju[] }>());
export const getAllUgovorOOsiguranjuError = createAction(GetAllUgovorOOsiguranjuError, props<{ error: string }>());

export const getOneRacun = createAction(GetOneRacun, props<{brojRacuna: number}>());
export const getOneRacunSuccess = createAction(GetOneRacunSuccess, props<{ selectedRacun: RacunOsiguranja }>());
export const getOneRacunError = createAction(GetOneRacunError, props<{ error: string }>());

export const getOneObavestenje = createAction(GetOneObavestenje, props<{id: number}>());
export const getOneObavestenjeSuccess = createAction(GetOneObavestenjeSuccess, props<{ selectedObavestenje: ObavestenjeOIzvrsenojUplati }>());
export const getOneObavestenjeError = createAction(GetOneObavestenjeError, props<{ error: string }>());


export const saveRacun = createAction(SaveRacun, props<{ racun: RacunOsiguranja }>());
export const saveRacunSuccess = createAction(SaveRacunSuccess, props<{ racun: RacunOsiguranja }>());
export const saveRacunError = createAction(SaveRacunError, props<{ error: string }>());

export const editRacun = createAction(EditRacun, props<{ racun: RacunOsiguranja }>());
export const editRacunSuccess = createAction(EditRacunSuccess, props<{ racun: RacunOsiguranja }>());
export const editRacunError = createAction(EditRacunError, props<{ error: string }>());

export const deleteRacun = createAction(DeleteRacun, props<{ brojRacuna: number }>());
export const deleteRacunSuccess = createAction(DeleteObavestenjeSuccess, props<{ brojRacuna: number }>());
export const deleteRacunError = createAction(DeleteObavestenjeError, props<{ error: string }>());

export const addStavkaRacuna = createAction(AddStavka, props<{ stavka: StavkaRacunaOsiguranja }>());
export const deleteStavkaRacuna = createAction(DeleteStavka, props<{ stavke: StavkaRacunaOsiguranja[], ukupanIznos: number }>());

export const setUkupanIznos = createAction(SetUkupanIznos, props<{ ukupanIznos: number }>());
export const clearStavkeRacuna = createAction(ClearStavkeRacuna, props<{ }>());
export const clearSelectedRacun = createAction(ClearSelectedRacun, props<{ }>());
export const setStavkeRacuna = createAction(SetStavkeRacuna, props<{stavke: StavkaRacunaOsiguranja[] }>());
export const setSelectedRacun = createAction(SetSelectedRacun, props<{ racun: RacunOsiguranja}>());

