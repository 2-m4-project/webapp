import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./style.css'],
})
export class NavBarComponent {
    links = [
        {text: 'Home', url: '/index'},
        {text:'Login', url:'/login'},
        {text:'Registratie', url:'/registratie'},
        {text: 'Locatie', url: '/locatie'},
        {text:'Geschiedenis', url: '/geschiedenis'},
        {text: 'Alarmeringen', url: '/alarm'}
    ];
}
