import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipanteService } from '../participante.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-participante-detail',
  templateUrl: './participante-detail.component.html',
  styleUrls: ['./participante-detail.component.css']
})
export class ParticipanteDetailComponent implements OnInit {
  participante: any

  constructor(
    private route: ActivatedRoute,
    public participanteService: ParticipanteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getParticipante()
  }

  getParticipante() {
    const nombre: string = this.route.snapshot.paramMap.get('nombre')!
    this.participanteService.getParticipante(nombre).subscribe((part) => this.participante = part)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.participanteService.updateParticipante(this.participante).subscribe(() => this.goBack())
  }

}
