
export class Arbeitszeit {
    id: number;
    datum: string;  // Das Datum sollte im Format TT.MM.JJJJ sein
    startzeit: string;  // Startzeit als HH:MM
    endzeit: string;    // Endzeit als HH:MM

    constructor(id: number, datum: string, startzeit: string, endzeit: string) {
        this.id = id;
        this.datum = datum;
        this.startzeit = startzeit;
        this.endzeit = endzeit;
    }
}
