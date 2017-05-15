import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AlarmeringenComponent} from "./components/alarmeringen-page/alarmeringen-page";
import {GeschiedenisComponent} from "./components/geschiedenis-page/geschiedenis-page";
import {RegistratieComponent} from "./components/registratie-page/registratie-page";
import { TestComponent } from './components/test-page/test-page';
import {PageNotFoundComponent} from "./app.pagenotfoundcomponent";
import {MainPageComponent} from "./components/main-page/main-page";
import {NavBarComponent} from "./components/navbar/navbar";
import {LoginComponent} from "./components/login-page/login-page";
import {HomepageComponent} from "./components/homepage/homepage-page";
import {LocationComponent} from "./components/location-page/location-page";
import {Http, Response, JsonpModule, HttpModule} from "@angular/http";
import {AgmCoreModule} from "@agm/core"

import 'rxjs/add/operator/map'
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    { path: 'login', component: LoginComponent },
    { path: 'alarmeringen', component: AlarmeringenComponent },
    { path: 'geschiedenis', component: GeschiedenisComponent },
    { path: 'registratie', component: RegistratieComponent },
    { path: '', component: HomepageComponent },
    { path: 'locatie', component: LocationComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyCq4B7wIDkkbJinMCpLMwpS5nRwe573UH4'})
    ],
    declarations: [ MainPageComponent, NavBarComponent, TestComponent, PageNotFoundComponent, HomepageComponent, RegistratieComponent, AlarmeringenComponent, GeschiedenisComponent, LoginComponent, LocationComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class AppModule {}
