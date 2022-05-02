import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossComponent } from './cross/cross.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomaComponent } from './doma/doma.component';
import { NivelDetailComponent } from './nivel-detail/nivel-detail.component';
import { NivelComponent } from './nivel/nivel.component';
import { NivelesComponent } from './niveles/niveles.component';
import { ParticipanteDetailComponent } from './participante-detail/participante-detail.component';
import { ParticipanteComponent } from './participante/participante.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { SaltoComponent } from './salto/salto.component';

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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
