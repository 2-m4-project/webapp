import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    templateUrl: './alarmeringen-page.html',
    styleUrls: ['./style.css']
})

export class AlarmeringenComponent {

    constructor(private http: Http) {

    }

    result : String = "empty";

    alarmeringen = [
        {
            persoon:'Jeroen',
            locatie: {
                straat: "Scheepshellingstraat",
                lat: 53.103243,
                long: 7.006474
            },
            melding:'gevallen'
        },
        {
            persoon:'Matthew',
            locatie: {
                straat: "Britanniawijk",
                lat: 53.103043,
                long: 7.016474
            },
            melding:'gebied verlaten'
        },
        {
            persoon:'Max',
            locatie: {
                straat: "Scheepshellingstraat",
                lat: 53.103943,
                long: 7.006574
            },
            melding:'gevallen'
        },
        {
            persoon:'Jeffrey',
            locatie: {
                straat: "Sebo Ennemaweg",
                lat: 53.173243,
                long: 7.006474
            },
            melding:'gevallen'
        },
    ];
}