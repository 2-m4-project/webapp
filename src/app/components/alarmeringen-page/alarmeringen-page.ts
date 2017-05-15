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
            persoon: {
                naam: 'Max'
            },
            locatie: {
                adres: {
                    straat: "Raadhuisplein",
                    plaats: "Emmen"
                },
                coordinaten: {
                    lat: 52.782614,
                    long: 6.89081
                }
            },
            melding: {
                categorie: "gebied",
                bericht: "gebied verlaten",
                datum: "2017-05-03 13:02"
            }
        },
        {
            persoon: {
                naam: 'Jeroen'
            },
            locatie: {
                adres: {
                    straat: "Scheepshellingstraat",
                    plaats: "Oude Pekela"
                },
                coordinaten: {
                    lat: 53.103243,
                    long: 7.006474
                }
            },
            melding: {
                categorie: "val",
                bericht: "gevallen",
                datum: "2017-05-03 13:02"
            }
        },
        {
            persoon: {
                naam: 'Matthew'
            },
            locatie: {
                adres: {
                    straat: "Britanniawijk",
                    plaats: "Oude Pekela"
                },
                coordinaten: {
                    lat: 53.103043,
                    long: 7.016474
                }
            },
            melding: {
                categorie: "gebied",
                bericht: "gebied verlaten",
                datum: "2017-05-03 13:02"
            }
        },
        {
            persoon: {
                naam: 'Jeffrey'
            },
            locatie: {
                adres: {
                    straat: "Sebo Ennemaweg",
                    plaats: "Midwolda"
                },
                coordinaten: {
                    lat: 53.173243,
                    long: 7.006474
                }
            },
            melding: {
                categorie: "val",
                bericht: "gevallen",
                datum: "2017-05-03 13:02"
            }
        }
    ];
}