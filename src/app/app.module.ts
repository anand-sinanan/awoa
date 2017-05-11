import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

//import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//Bootstrap!! Didn't seem to be working for latest bootstrap
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

import { NavbarComponent} from './partials/navbar/navbar.component';
import { CarouselComponent} from './partials/carousel/carousel.component';
import { FooterComponent } from './partials/footer/footer.component';
import {ImageService} from './services/image.service';

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
        MarketingComponent,
        GalleryComponent
    ],
    providers: [
        ImageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
