import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { ContactComponent } from './Contact/contact.component'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });
@NgModule({
    imports: [BrowserModule, HomeModule, rootRouting],
    declarations: [AppComponent, HeaderComponent, FooterComponent, ContactComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
