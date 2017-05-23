import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

//import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './local-dbs/in-memory-web-api/in-memory-data.service';
//Imports for the Mock way for user authenticate
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './local-dbs/mock-db/fake-backend';

//Bootstrap!! Didn't seem to be working for latest bootstrap/ using CDN instead
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// Don't exist yet, Gallery for all public images,
// ImagesComponent for user specific, detail and search used by both

//import { ImagesComponent } from './images.component';
//import { ImageDetailComponent } from './image-detail.component';
//import { ImageSearchComponent } from './image-search.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MarketingComponent } from './views/marketing/marketing.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

import { NavbarComponent} from './partials/navbar/navbar.component';
import { CarouselComponent} from './partials/carousel/carousel.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AlertComponent } from './partials/alert/alert.component';
import { ThumbComponent } from './partials/thumb/thumb.component';

import { ImageService } from './services/image/image.service';
import { AlertService } from './services/alert/alert.service';
import { UserService } from './services/user/user.service';

//Auth
import {AuthGuard} from './services/auth/auth-guard';
import {AuthenticationService} from './services/auth/authentication.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
//        NgbModule.forRoot()                                 //covers entire proj? default for sub modules don't need the forRoot
    ],
    declarations: [
        AppComponent,
        //ImagesComponent,
        //ImageDetailComponent,
        //ImageSearchComponent,
        DashboardComponent,
        NavbarComponent,
        FooterComponent,
        CarouselComponent,
        ThumbComponent,
        MarketingComponent,
        GalleryComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        //auth
        AuthGuard,
        AuthenticationService,

        ImageService,
        UserService,
        AlertService,

        //mock db stuff
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
