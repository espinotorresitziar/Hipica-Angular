import { dPuntuaciones } from "src/app/interfaces/interfaces";
import { Participante } from "./participante";

export class Doma extends Participante {
    _parada: number
    _paso: number
    _trote: number
    _galope: number
    _pasoAtras: number
    _transiciones: number
    _cambioDirec: number
    _figuras: number
    _movLateral: number
    _piruetas: number

    constructor (
        id: number,
        nombre: string,
        edad: number,
        nacionalidad: string,
        nivel: string,
        modalidad: string,
        nomCaballo: string,
        raza: string,
        edadCaballo: number,
        cabEstabulado: boolean,
        parada: number,
        paso: number,
        trote: number,
        galope: number,
        pasoAtras: number,
        transiciones: number,
        cambioDirec: number,
        figuras: number,
        movLateral: number,
        piruetas: number
    ) {
        super (
            id,
            nombre,
            edad,
            nacionalidad,
            nivel,
            modalidad,
            nomCaballo,
            raza,
            edadCaballo,
            cabEstabulado
        )
        this._parada = parada,
        this._paso = paso,
        this._trote = trote,
        this._galope = galope,
        this._pasoAtras = pasoAtras,
        this._transiciones = transiciones,
        this._cambioDirec = cambioDirec,
        this._figuras = figuras,
        this._movLateral = movLateral,
        this._piruetas = piruetas
    }

    get parada() {
        return this._parada
    }
    get paso() {
        return this._paso
    }
    get trote() {
        return this._trote
    }
    get galope() {
        return this._galope
    }
    get pasoAtras() {
        return this._pasoAtras
    }
    get transiciones() {
        return this._transiciones
    }
    get cambioDirec() {
        return this._cambioDirec
    }
    get figuras() {
        return this._figuras
    }
    get movLateral() {
        return this._movLateral
    }
    get piruetas() {
        return this._piruetas
    }

    override puntosT() {
        let puntosT: number
        puntosT = this._parada + this._paso + this._trote + this._galope +this._pasoAtras + this._transiciones + 
        this._cambioDirec + this._figuras + this._movLateral + this._piruetas
        return (puntosT)
    }
}
