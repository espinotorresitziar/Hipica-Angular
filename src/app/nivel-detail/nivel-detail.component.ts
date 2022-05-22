import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nivel-detail',
  templateUrl: './nivel-detail.component.html',
  styleUrls: ['./nivel-detail.component.css']
})
export class NivelDetailComponent implements OnInit {
  nivel: Nivel | undefined
  submitted = false
  editarNivel: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public nivelService: NivelService,
    private location: Location
  ) {
    this.editarNivel = this.fb.group(
      {
        id: ['', Validators.required],
        tipoNivel: [this.route.snapshot.paramMap.get('tipoNivel'), Validators.required],
        aficionado: ['', Validators.required],
        limiteEdad: ['', Validators.required],
        inscripcion: ['', Validators.required]
      }
    )
   }

  ngOnInit(): void {
    this.getNivel()
  }

  getNivel(): void {
    const tipoNivel: any = this.route.snapshot.paramMap.get('tipoNivel')
    this.nivelService.getNivel(tipoNivel).subscribe((nivel) =>    {
      this.nivel = nivel
      console.log(tipoNivel)
      console.log(this.route)
      console.log(nivel)
    }
                           
    )
    /*
     const id = parseInt(this.route.snapshot.paramMap.get('_id')!)
    this.nivelService.getNivel(id).subscribe(
      niv => {
        this.nivel = niv
      }
    )
    */
  }

  modificarNivel() {
    const nivel: any = {
      id: this.editarNivel.value.id,
      tipoNivel: this.editarNivel.value.tipoNivel,
      aficionado: this.editarNivel.value.aficionado,
      limiteEdad: this.editarNivel.value.limiteEdad,
      inscripcion: this.editarNivel.value.inscripcion
    }
    this.nivelService.updateNivel(nivel)
  }

  goBack(): void {
    this.location.back()
  }
  }