import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './app.testcomponent';
import {PageNotFoundComponent} from "./app.pagenotfoundcomponent";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ AppComponent, TestComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
