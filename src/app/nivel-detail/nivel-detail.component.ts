import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nivel-detail',
  templateUrl: './nivel-detail.component.html',
  styleUrls: ['./nivel-detail.component.css']
})
export class NivelDetailComponent implements OnInit {
  nivel: any
  submitted = false

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public nivelService: NivelService,
    private location: Location,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    const doc: any = {
      id: this.nivel._id,
      tipoNivel: this.nivel._tipoNivel,
      aficionado: this.nivel._aficionado,
      limiteEdad: parseInt(this.nivel._limiteEdad),
      inscripcion: parseInt(this.nivel._inscripcion)
    }
    this.nivelService.updateNivel(doc).subscribe(() => {
      this.toastr.success('Nivel actualiado con éxito', 'Nivel actualizado')
      this.router.navigate(['/niveles'])
      this.goBack()
    })
  }

}