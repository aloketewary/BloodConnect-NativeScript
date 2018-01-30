"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var tutorial_component_1 = require("./pages/tutorial/tutorial.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var animations_1 = require("@angular/platform-browser/animations");
var global_data_handler_1 = require("./shared/models/global-data-handler");
var auth_service_1 = require("./shared/services/auth.service");
var input_directives_1 = require("./util/input.directives");
var forms_2 = require("@angular/forms");
var dashboard_page_component_1 = require("./pages/dashboard-page/dashboard-page.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                forms_2.ReactiveFormsModule,
                forms_2.FormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css',
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                tutorial_component_1.TutorialComponent,
                input_directives_1.MinLengthDirective,
                input_directives_1.IsEmailDirective,
                input_directives_1.IsPasswordDirective,
                dashboard_page_component_1.DashBoardPageComponent
            ],
            providers: [
                global_data_handler_1.GlobalDataHandler,
                auth_service_1.AuthenticationService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
        ,
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDBFQUF3RTtBQUN4RSx1RUFBOEQ7QUFDOUQsbUVBQStFO0FBQy9FLDJFQUF3RTtBQUN4RSwrREFBdUU7QUFDdkUsNERBQW9HO0FBQ3BHLHdDQUFrRTtBQUNsRSw0RkFBeUY7QUF1Q3pGO0lBQ0k7SUFBZ0IsQ0FBQztJQURSLFNBQVM7UUFyQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9DQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QiwyQkFBbUI7Z0JBQ25CLG1CQUFXO2dCQUNYLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsSUFBSSxFQUFFLDJCQUEyQjtpQkFDcEMsQ0FBQzthQUNMO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsc0NBQWlCO2dCQUNqQixxQ0FBa0I7Z0JBQ2xCLG1DQUFnQjtnQkFDaEIsc0NBQW1CO2dCQUNuQixpREFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsdUNBQWlCO2dCQUNqQixvQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFOzs7T0FDVyxTQUFTLENBRXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUdXRvcmlhbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEdsb2JhbERhdGFIYW5kbGVyIH0gZnJvbSBcIi4vc2hhcmVkL21vZGVscy9nbG9iYWwtZGF0YS1oYW5kbGVyXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNaW5MZW5ndGhEaXJlY3RpdmUsIElzRW1haWxEaXJlY3RpdmUsIElzUGFzc3dvcmREaXJlY3RpdmUgfSBmcm9tIFwiLi91dGlsL2lucHV0LmRpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEYXNoQm9hcmRQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgJ2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnLFxuICAgICAgICB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBUdXRvcmlhbENvbXBvbmVudCxcbiAgICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlLFxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlLFxuICAgICAgICBJc1Bhc3N3b3JkRGlyZWN0aXZlLFxuICAgICAgICBEYXNoQm9hcmRQYWdlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR2xvYmFsRGF0YUhhbmRsZXIsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==