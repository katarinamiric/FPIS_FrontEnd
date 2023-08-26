import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/racun', pathMatch: 'full' },
  { path: 'racun', loadChildren: './racun-osiguranja/racun-osiguranja.module#RacunOsiguranjaModule' },
  { path: 'obavestenje', loadChildren: './obavestenje-o-izvrsenoj-uplati-osiguranja/obavestenje-o-izvrsenoj-uplati-osiguranja.module#ObavestenjeOIzvrsenojUplatiOsiguranjaModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
