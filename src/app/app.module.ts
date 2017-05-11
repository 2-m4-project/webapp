import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TestComponent } from './components/test-page/test-page';
import {PageNotFoundComponent} from "./app.pagenotfoundcomponent";
import {MainPageComponent} from "./components/main-page/main-page";
import {NavBarComponent} from "./components/navbar/navbar";
import {HomepageComponent} from "./components/homepage/homepage-page";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    { path: '', component: HomepageComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        HttpModule
    ],
    declarations: [ MainPageComponent, NavBarComponent, TestComponent, PageNotFoundComponent, HomepageComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class AppModule {}