import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map'

@Component({
    templateUrl: './homepage-page.html',
    styleUrls: ['./style.css'],
})
export class HomepageComponent implements OnInit {

    public homepageBlocks: HomepageBlock[];

    constructor(private http: Http) {

    }

    ngOnInit(): void {
        this.http.get("/homepage.json")
            .subscribe((res: Response) => {
                this.homepageBlocks = res.json();
            });
    }
}

export class HomepageBlock {
    photo: string;
    title: string;
    text: string;
    url: string;
}
