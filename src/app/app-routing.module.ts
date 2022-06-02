import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { CrossComponent } from './cross/cross.component';
import { CrossdetailComponent } from './crossdetail/crossdetail.component';
import { CrossgraficaComponent } from './crossgrafica/crossgrafica.component';
import { CrosspuntosComponent } from './crosspuntos/crosspuntos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomaComponent } from './doma/doma.component';
import { DomadetailComponent } from './domadetail/domadetail.component';
import { DomapuntosComponent } from './domapuntos/domapuntos.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NivelDetailComponent } from './nivel-detail/nivel-detail.component';
import { NivelComponent } from './nivel/nivel.component';
import { NivelesComponent } from './niveles/niveles.component';
import { ParticipanteDetailComponent } from './participante-detail/participante-detail.component';
import { ParticipanteComponent } from './participante/participante.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { SaltoComponent } from './salto/salto.component';
import { SaltodetailComponent } from './saltodetail/saltodetail.component';
import { SaltograficaComponent } from './saltografica/saltografica.component';
import { SaltopuntosComponent } from './saltopuntos/saltopuntos.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'niveles', component: NivelesComponent},
  { path: 'participantes', component: ParticipantesComponent},
  { path: 'newNivel', component: NivelComponent},
  { path: 'newParticipante', component: ParticipanteComponent},
  { path: 'doma', component: DomaComponent},
  { path: 'salto', component: SaltoComponent},
  { path: 'cross', component: CrossComponent},
  { path: 'niveles/:tipoNivel', component: NivelDetailComponent},
  { path: 'participantes/:nombre', component: ParticipanteDetailComponent},
  { path: 'grafica', component: GraficaComponent},
  { path: 'domadetail', component: DomadetailComponent},
  { path: 'doma/:nombre', component: DomapuntosComponent},
  { path: 'crossdetail', component: CrossdetailComponent},
  { path: 'saltodetail', component: SaltodetailComponent},
  { path: 'cross/:nombre', component: CrosspuntosComponent},
  { path: 'salto/:nombre', component: SaltopuntosComponent},
  { path: 'crossgrafica', component: CrossgraficaComponent},
  { path: 'clasificacion', component: ClasificacionComponent},
  { path: 'saltografica', component: SaltograficaComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
