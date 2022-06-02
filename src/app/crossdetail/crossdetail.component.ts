import { Component, OnInit } from '@angular/core';
import { Cross } from '../models/participantes/cross';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-crossdetail',
  templateUrl: './crossdetail.component.html',
  styleUrls: ['./crossdetail.component.css']
})
export class CrossdetailComponent implements OnInit {
  cross: Cross[] = []

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.getCross()
    console.log(this.cross)
  }

  getCross(): void {
    this.participanteService.getCross().subscribe((cro) => (this.cross = cro))
  }

  elimParticipante(nombre:string) {
    this.participanteService.elimParticipante(nombre).subscribe(() => {
      console.log('Eliminado')
    })
  }
}