import {UplatnicaZaOsiguranje} from './uplatnica-za-osiguranje.model';
import {Radnik} from './radnik.model';
import {Valuta} from './valuta.model';
import {Model} from './model.model';
import {OsiguravajucaKuca} from './osiguravajuce-kuca.model';

export interface ObavestenjeOIzvrsenojUplati {
  id: number;
  svrhaObavestenja: string;
  datum: Date;
  idUplatnice: number;
  uplatnica?: UplatnicaZaOsiguranje;
  idOsigKuce?: number;
  osiguravajucaKuca?: OsiguravajucaKuca;
  sifraRadnika: number;
  radnik?: Radnik;
  idValute: number;
  valuta?: Valuta;
  idModela: number;
  model?: Model;
}
