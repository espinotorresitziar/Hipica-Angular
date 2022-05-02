import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nivel } from './models/niveles/nivel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  private apiURL = 'https://hipica-restapi.herokuapp.com/'

  constructor(private http: HttpClient) {}

  getNiveles(): Observable<any> {
    const urlget= `${this.apiURL}niveles`
    return this.http.get(urlget)
  }

  getNivel(tipoNivel: string) {
    const url = `https://hipica-restapi.herokuapp.com/niveles/${tipoNivel}`
    return this.http.get(url)
  }

  addNivel(doc: Nivel) {
    const url = `${this.apiURL}nivel`
    return this.http.post(url, doc)
  }

  updateNivel(doc: Nivel) {
    const url = `${this.apiURL}modificarNivel/${doc.id}`
    return this.http.put(url, doc)
  }
}
