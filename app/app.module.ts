import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TutorialComponent } from "./pages/tutorial/tutorial.component";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalDataHandler } from "./shared/models/global-data-handler";
import { AuthenticationService } from "./shared/services/auth.service";
import { MinLengthDirective, IsEmailDirective, IsPasswordDirective } from "./util/input.directives";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DashBoardPageComponent } from "./pages/dashboard-page/dashboard-page.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        ReactiveFormsModule,
        FormsModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/font-awesome.css',
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        TutorialComponent,
        MinLengthDirective,
        IsEmailDirective,
        IsPasswordDirective,
        DashBoardPageComponent
    ],
    providers: [
        GlobalDataHandler,
        AuthenticationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
    constructor() { }
}
