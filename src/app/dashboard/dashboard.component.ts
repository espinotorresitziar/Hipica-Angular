import { Component, OnInit } from '@angular/core';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  niveles: Nivel[] = []

  constructor(private nivelService: NivelService) { }

  ngOnInit(): void {
    this.getNiveles()
  }

  getNiveles(): void {
    this.nivelService.getNiveles().subscribe(niveles => this.niveles = niveles)
  }

}
