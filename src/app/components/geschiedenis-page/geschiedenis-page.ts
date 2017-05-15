import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';

@Component({
    templateUrl: './geschiedenis-page.html',
    styleUrls: ['./style.css'],
    directives: [AgmMap]
})

export class GeschiedenisComponent implements OnInit {

    public lat: number;
    public lng: number;
    public zoom: number;

    public markers: Marker[];

    ngOnInit(): void {
        this.markers = [
            new Marker(53.1488943, 7.0340214, 'M'),
            new Marker(52.7788414, 6.914114, 'M')
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
