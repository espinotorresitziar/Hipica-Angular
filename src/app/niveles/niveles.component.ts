import { Component, OnInit } from '@angular/core';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  niveles: Nivel[] = []

  constructor(public nivelService: NivelService) { }

  ngOnInit(): void {
    this.getNiveles()
    console.log(this.niveles)
  }

  getNiveles(): void {
    this.nivelService.getNiveles().subscribe((niv) => (this.niveles = niv))
  }

  eliminarNivel(tipoNivel: string) {
    this.nivelService
  }

}
