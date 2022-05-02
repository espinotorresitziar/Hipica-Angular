import { dPuntuaciones } from "src/app/interfaces/interfaces";
import { Participante } from "./participante";

export class Doma extends Participante {
    public _dPuntuaciones: dPuntuaciones

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
        dPuntuaciones: {
            parada: number
            paso: number
            trote: number
            galope: number
            pasoAtras: number
            transiciones: number
            cambioDirec: number
            figuras: number
            movLateral: number
            piruetas: number
        }
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
        this._dPuntuaciones = dPuntuaciones
    }

    get dPuntuaciones() {
        return this._dPuntuaciones
    }
}
