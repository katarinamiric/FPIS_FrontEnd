import {Radnik} from "./radnik.model";
import {NacinPlacanja} from "./nacin-placanja.model";
import {StavkaRacunaOsiguranja} from "./stavka-racuna-osiguranja.model";
import {OsiguravajucaKuca} from "./osiguravajuce-kuca.model";
import {UgovorOOsiguranju} from "./ugovor-o-osiguranju.model";


export interface RacunOsiguranja {
  id: number;
  datum: Date;
  iznos: number;
  pozivNaBroj: string;
  brojUgovora: number;
  ugovor?: UgovorOOsiguranju;
  nacinPlacanjaId: number;
  nacinPlacanja?: NacinPlacanja;
  sifraRadnika: number;
  radnik?: Radnik;
  stavke?: StavkaRacunaOsiguranja[];
}
