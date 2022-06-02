import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante } from './models/participantes/participante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {
  private apiURL = 'https://restapi-hipica.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getParticipantes(): Observable<any> {
    const urlget = `${this.apiURL}participantes`;
    return this.http.get(urlget);
  }

  getParticipante(nombre: string): Observable <any> {
    const url = `https://restapi-hipica.herokuapp.com/participante/${nombre}`;
    return this.http.get(url);
  }

  getDoma(): Observable<any> {
    const urlget = `${this.apiURL}doma`
    return this.http.get(urlget)
  }

  getSalto(): Observable<any> {
    const urlget = `${this.apiURL}salto`
    return this.http.get(urlget)
  }

  getCross(): Observable<any> {
    const urlget = `${this.apiURL}cross`
    return this.http.get(urlget)
  }

  addParticipante(doc: Participante) {
    const url = `${this.apiURL}participante`;
    return this.http.post(url, doc);
  }

  updateParticipante(doc: Participante) {
    const url = `${this.apiURL}modificarPartici/${doc.nombre}`;
    return this.http.put(url, doc);
  }

  elimParticipante(nombre: string) {
    const url = `${this.apiURL}eliminarPartici/${nombre}`;
    return this.http.delete(url);
  }
}
