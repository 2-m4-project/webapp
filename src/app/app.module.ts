import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './components/test-page/test-page';
import {PageNotFoundComponent} from "./app.pagenotfoundcomponent";
import {MainPageComponent} from "./components/main-page/main-page";
import {NavBarComponent} from "./components/navbar/navbar";

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ MainPageComponent, NavBarComponent, TestComponent, PageNotFoundComponent ],
    bootstrap:    [ MainPageComponent ]
})
export class AppModule {}
