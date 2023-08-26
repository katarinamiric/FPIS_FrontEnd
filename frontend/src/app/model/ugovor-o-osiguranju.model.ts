import {ZahtevZaOsiguranje} from "./zahtev-za-osiguranje.model";

export interface UgovorOOsiguranju {
  id: number;
  datum: Date;
  potpisao: string;
  idDrzave: number;
  idOsigKuce: number;
  sifraRadnika: number;
  sifraZahteva: number;
}

