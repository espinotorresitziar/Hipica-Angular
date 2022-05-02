import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante } from './models/participantes/participante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {
  private apiURL = 'https://hipica-restapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getParticipantes(): Observable<any> {
    const urlget = `${this.apiURL}participantes`;
    return this.http.get(urlget);
  }

  getParticipante(_nombre: string) {
    const url = `https://hipica-restapi.herokuapp.com/participantes/${_nombre}`;
    return this.http.get(url);
  }

  addParticipante(doc: Participante) {
    const url = `${this.apiURL}participante`;
    return this.http.post(url, doc);
  }

  updateParticipante(doc: Participante) {
    const url = `${this.apiURL}modificarPartici/${doc.nombre}`;
    return this.http.put(url, doc);
  }

  elimParticipante(nombre: string): Observable<any> {
    const url = `${this.apiURL}eliminarPartici/${nombre}`;
    return this.http.delete(url);
  }
}
