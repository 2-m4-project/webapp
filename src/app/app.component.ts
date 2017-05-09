import { Component } from '@angular/core';

@Component({
    selector: 'alarmering-app',
    template: `<h1>Main page</h1>
    <nav>
        <a routerLink="/test" routerLinkActive="active">Test</a>
        <a routerLink="/randomurl" routerLinkActive="active">Random url</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent  {}
