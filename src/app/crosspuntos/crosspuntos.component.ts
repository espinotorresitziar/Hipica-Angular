import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipanteService } from '../participante.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crosspuntos',
  templateUrl: './crosspuntos.component.html',
  styleUrls: ['./crosspuntos.component.css']
})
export class CrosspuntosComponent implements OnInit {
  datos: any

  constructor(
    private participanteService: ParticipanteService,
    private route: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.getParticipante()
  }

  getParticipante() {
    const nombre: any = this.route.snapshot.paramMap.get('nombre')
    this.participanteService.getParticipante(nombre).subscribe((dat) => {
      this.datos = dat
      console.log(dat)
    })
  }

  goBack(): void {
    this.location.back()
  }

}
