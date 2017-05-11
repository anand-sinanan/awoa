import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './views/dashboard/dashboard.component';
import { GalleryComponent }   from './views/gallery/gallery.component';


//import { ImagesComponent }      from './images.component';
//import { ImageDetailComponent }  from './image-detail.component';

//import { CarouselComponent } from './partials/carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'carousel',  component: CarouselComponent },
  { path: 'dashboard',  component: DashboardComponent },
  //{ path: 'images/detail/:id', component: ImageDetailComponent },
  //{ path: 'images',     component: ImagesComponent },
  { path: 'gallery',    component: GalleryComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
