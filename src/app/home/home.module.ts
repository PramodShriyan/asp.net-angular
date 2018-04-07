import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {ContactComponent } from '../Contact/contact.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    }
]);

@NgModule({
    imports: [
        homeRouting,
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }