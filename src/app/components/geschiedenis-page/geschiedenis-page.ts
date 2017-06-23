import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';

@Component({
    templateUrl: './geschiedenis-page.html',
    styleUrls: ['./style.css']
})

export class GeschiedenisComponent implements OnInit {

    public markers: Marker[];

    ngOnInit(): void {
        this.markers = [
            new Marker(53.1488943, 7.0340214, '.'),
            new Marker(52.7788414, 6.914114, '.'),
            new Marker(52.770713, 6.917195, '.'),
            new Marker(52.781817, 6.883648, '.'),
            new Marker(52.771919, 6.896551, '.')
        ];
    }
}

export class Marker {
    public lat: number;
    public long: number;
    public marker: string;

    constructor (lat: number, long: number, marker: string){
        this.lat = lat;
        this.long = long;
        this.marker = marker;
    }
}
