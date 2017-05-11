import { Component } from '@angular/core';

@Component({
    templateUrl: './location-page.html',
    styles: ['ul { color: blue; }']
})
export class LocationComponent{
    public name: string;
    private map: any;
    private options: any;

    constructor (mapDiv: Element)
    {
        this.name = "GoogleMap";
        this.options =
            {center: new google.maps.LatLng(1,1),
                zoom: 3,
                MapTypeId: google.maps.MapTypeID.TERRAIN
            };
        this.map = new google.maps.Map(mapDiv, this.options);
    }
}
