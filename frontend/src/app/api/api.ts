import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Drzava } from '../model/drzava.model';
import { Radnik } from '../model/radnik.model';
import { Model } from '../model/model.model';
import { NacinPlacanja } from '../model/nacin-placanja.model';
import { Valuta } from '../model/valuta.model';
import { RacunOsiguranja } from '../model/racun-osiguranja.model';
import { UgovorOOsiguranju } from '../model/ugovor-o-osiguranju.model';
import { ObavestenjeOIzvrsenojUplati } from '../model/obavestenje-o-izvrsenoj-uplati.model';
import { GetAllOsiguravajucaKucaError } from '../store/actions';
import { OsiguravajucaKuca } from '../model/osiguravajuce-kuca.model';
import { UplatnicaZaOsiguranje } from '../model/uplatnica-za-osiguranje.model';

@Injectable()
export class Api {
  readonly API = 'http://localhost:5064/api/';

  constructor(private http: HttpClient) {}

  getAllUplatnica(): Observable<UplatnicaZaOsiguranje[]> {
    return this.http.get<UplatnicaZaOsiguranje[]>(
      this.API + 'UplatnicaZaOsiguranje/FilterUplatnice'
    );
  }
  getAllNacinPlacanja(): Observable<NacinPlacanja[]> {
    return this.http.get<NacinPlacanja[]>(this.API + 'Radnik/GetNaciniPlacanja');
  }

  getAllOsiguravajucaKuca(): Observable<OsiguravajucaKuca[]> {
    return this.http.get<OsiguravajucaKuca[]>(
      this.API + 'OsiguravajucaKuca/GetOsiguravajuceKuce'
    );
  }

  getAllRacun(): Observable<RacunOsiguranja[]> {
    return this.http.get<RacunOsiguranja[]>(this.API + 'Racun/filterRacuni');
  }

  getAllRadnik(): Observable<Radnik[]> {
    return this.http.get<Radnik[]>(this.API + 'Radnik/GetRadnici');
  }

  getAllObavestenja(): Observable<ObavestenjeOIzvrsenojUplati[]> {
    return this.http.get<ObavestenjeOIzvrsenojUplati[]>(
      this.API + 'Obavestenje/GetAllObavestenja'
    );
  }

  getAllUgovorOOsiguranju(): Observable<UgovorOOsiguranju[]> {
    return this.http.get<UgovorOOsiguranju[]>(this.API + 'Ugovor/filterUgovor');
  }

  getOneRacun(idRacuna: number): Observable<RacunOsiguranja> {
    return this.http.get<RacunOsiguranja>(this.API + 'Racun/' + idRacuna);
  }

  getOneObavestenje(id: number): Observable<ObavestenjeOIzvrsenojUplati> {
    return this.http.get<ObavestenjeOIzvrsenojUplati>(
      this.API + 'Obavestenje/' + id
    );
  }

  saveRacun(racun: RacunOsiguranja): Observable<RacunOsiguranja> {
    return this.http.post<RacunOsiguranja>(this.API + 'Racun/Add', racun);
  }

  editRacun(racun: RacunOsiguranja): Observable<RacunOsiguranja> {
    const params = new HttpParams()
      .set('id', '' + racun.id);
    return this.http.post<RacunOsiguranja>(this.API + 'Racun/Update', racun, {params});
  }

  saveObavestenje(obavestenje: ObavestenjeOIzvrsenojUplati): Observable<ObavestenjeOIzvrsenojUplati> {
    return this.http.post<ObavestenjeOIzvrsenojUplati>(this.API + 'Obavestenje/Add', obavestenje);
  }

  updateObavestenje(obavestenje: ObavestenjeOIzvrsenojUplati): Observable<ObavestenjeOIzvrsenojUplati> {
    const params = new HttpParams()
      .set('id', '' + obavestenje.id);
    return this.http.post<ObavestenjeOIzvrsenojUplati>(this.API + 'Obavestenje/Update', obavestenje, {params});
  }

  deleteRacun(id: number): Observable<{}> {
    return this.http.delete(this.API + 'racun/delete/' + id);
  }

  deleteObavestenje(id: number): Observable<{}> {
    return this.http.delete(this.API + 'obavestenje/delete/' + id);
  }
}

