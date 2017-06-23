import { Component, OnInit } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';

@Component({
    templateUrl: './location-page.html',
    styles: ['ul { color: blue; }'],
    styleUrls: ['./style.css']
})
export class LocationComponent implements OnInit{

    public lat: number;
    public lng: number;
    public zoom: number;

    public markers: Marker[];

    ngOnInit(): void {
        this.markers = [
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
