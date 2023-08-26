import {Model} from './model.model';
import {Valuta} from './valuta.model';
import {Radnik} from './radnik.model';
import {RacunOsiguranja} from './racun-osiguranja.model';

export interface UplatnicaZaOsiguranje {
  id: number;
  svrhaUplate: string;
  datum: Date;
  iznos: number;
  brojRacuna: string;
  idModela?: number;
  model?: Model;
  idValute?: number;
  valuta?: Valuta;
  sifraRadnika?: number;
  radnik?: Radnik;
  brRacunaOsig: number;
  racunOsig?: RacunOsiguranja;
}
