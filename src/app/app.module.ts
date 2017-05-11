import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TestComponent } from './components/test-page/test-page';
import {PageNotFoundComponent} from "./app.pagenotfoundcomponent";
import {MainPageComponent} from "./components/main-page/main-page";
import {NavBarComponent} from "./components/navbar/navbar";
import {LoginComponent} from "./components/login-page/login-page";
import {HomepageComponent} from "./components/homepage/homepage-page";
import {LocationComponent} from "./components/location-page/location-page";

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    { path: 'login', component: LoginComponent },
    { path: 'locatie', component: LocationComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot()
    ],
    declarations: [ MainPageComponent, NavBarComponent, TestComponent, PageNotFoundComponent, HomepageComponent, LoginComponent, LocationComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class AppModule {}
