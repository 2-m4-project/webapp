import { Component } from '@angular/core';

@Component({
    templateUrl: './alarmeringen-page.html',
    styleUrls: ['./style.css'],
})

export class AlarmeringenComponent  {
    alarmeringen = [
        {
            naam:'Jeroen',
            locatie: {
                lat: 53.103243,
                long: 7.006474
            },
            melding:'gevallen'
        },
        {
            naam:'Matthew',
            locatie: {
                lat: 53.103043,
                long: 7.016474
            },
            melding:'gebied verlaten'
        },
        {
            naam:'Max',
            locatie: {
                lat: 53.103943,
                long: 7.006574
            },
            melding:'gevallen'
        },
        {
            naam:'Jeffrey',
            locatie: {
                lat: 53.173243,
                long: 7.006474
            },
            melding:'gevallen'
        },
    ];
}
