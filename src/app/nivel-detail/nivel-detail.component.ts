import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nivel-detail',
  templateUrl: './nivel-detail.component.html',
  styleUrls: ['./nivel-detail.component.css']
})
export class NivelDetailComponent implements OnInit {
  nivel: any

  constructor(
    private route: ActivatedRoute,
    public nivelService: NivelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNivel()
  }

  getNivel(): void {
    const tipoNivel: string = this.route.snapshot.paramMap.get('_tipoNivel')!
    this.nivelService.getNivel(tipoNivel).subscribe((niv) =>    
                         {console.log(niv)
                           this.nivel = niv}
    )
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.nivelService.updateNivel(this.nivel).subscribe(() => this.goBack())
  }
}
