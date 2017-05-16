"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
//import { RouterModule } from "@angular/router";
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./local-dbs/in-memory-web-api/in-memory-data.service");
//Imports for the Mock way for user authenticate
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var fake_backend_1 = require("./local-dbs/mock-db/fake-backend");
//Bootstrap!! Didn't seem to be working for latest bootstrap/ using CDN instead
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
var app_component_1 = require("./app.component");
// Don't exist yet, Gallery for all public images,
// ImagesComponent for user specific, detail and search used by both
//import { ImagesComponent } from './images.component';
//import { ImageDetailComponent } from './image-detail.component';
//import { ImageSearchComponent } from './image-search.component';
var dashboard_component_1 = require("./views/dashboard/dashboard.component");
var marketing_component_1 = require("./views/marketing/marketing.component");
var gallery_component_1 = require("./views/gallery/gallery.component");
var register_component_1 = require("./views/register/register.component");
var login_component_1 = require("./views/login/login.component");
var navbar_component_1 = require("./partials/navbar/navbar.component");
var carousel_component_1 = require("./partials/carousel/carousel.component");
var footer_component_1 = require("./partials/footer/footer.component");
var alert_component_1 = require("./partials/alert/alert.component");
var image_service_1 = require("./services/image/image.service");
var alert_service_1 = require("./services/alert/alert.service");
var user_service_1 = require("./services/user/user.service");
//Auth
var auth_guard_1 = require("./services/auth/auth-guard");
var authentication_service_1 = require("./services/auth/authentication.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            //ImagesComponent,
            //ImageDetailComponent,
            //ImageSearchComponent,
            dashboard_component_1.DashboardComponent,
            navbar_component_1.NavbarComponent,
            footer_component_1.FooterComponent,
            carousel_component_1.CarouselComponent,
            marketing_component_1.MarketingComponent,
            gallery_component_1.GalleryComponent,
            alert_component_1.AlertComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        providers: [
            //auth
            auth_guard_1.AuthGuard,
            authentication_service_1.AuthenticationService,
            image_service_1.ImageService,
            user_service_1.UserService,
            alert_service_1.AlertService,
            //mock db stuff
            fake_backend_1.fakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map