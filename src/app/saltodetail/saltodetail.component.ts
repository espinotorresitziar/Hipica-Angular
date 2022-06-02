import { Component, OnInit } from '@angular/core';
import { Salto } from '../models/participantes/salto';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-saltodetail',
  templateUrl: './saltodetail.component.html',
  styleUrls: ['./saltodetail.component.css']
})
export class SaltodetailComponent implements OnInit {
  salto: Salto[] = []

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.getSalto()
    console.log(this.salto)
  }

  getSalto(): void {
    this.participanteService.getSalto().subscribe((sal) => (this.salto = sal))
  }

  elimParticipante(nombre:string) {
    this.participanteService.elimParticipante(nombre).subscribe(() => {
      console.log('Eliminado')
    })
  }

}
