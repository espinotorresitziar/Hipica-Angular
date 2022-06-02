import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nivel } from './models/niveles/nivel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  private apiURL = 'https://restapi-hipica.herokuapp.com/'
  selectedNivel: any;

  constructor(private http: HttpClient) {}

  getNiveles(): Observable<any> {
    const urlget= `${this.apiURL}niveles`
    return this.http.get(urlget)
  }

  getNivel(tipoNivel: string): Observable <any> {
    const url = `https://restapi-hipica.herokuapp.com/niveles/${tipoNivel}`
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

  eliminarNivel(tipoNivel: string) {
    const url = `${this.apiURL}eliminarNivel/${tipoNivel}`;
    return this.http.delete(url)
  }
}
