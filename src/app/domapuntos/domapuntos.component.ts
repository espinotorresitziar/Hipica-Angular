import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doma } from '../models/participantes/doma';
import { Location } from '@angular/common';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-domapuntos',
  templateUrl: './domapuntos.component.html',
  styleUrls: ['./domapuntos.component.css']
})
export class DomapuntosComponent implements OnInit {
  puntos: any

  constructor(
    private route: ActivatedRoute,
    private participanteService: ParticipanteService,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.getParticipante()
  }

  getParticipante() {
    const nombre: any = this.route.snapshot.paramMap.get('nombre')
    this.participanteService.getParticipante(nombre).subscribe((punt) => {
      this.puntos = punt
      console.log(punt)
    })
  }

  goBack(): void {
    this.location.back()
  }

}
