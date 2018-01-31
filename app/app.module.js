"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var side_drawer_item_component_1 = require("./shared/components/side-drawer-item/side-drawer-item.component");
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
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var side_drawer_component_1 = require("./shared/components/side-drawer/side-drawer.component");
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
                }),
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                tutorial_component_1.TutorialComponent,
                input_directives_1.MinLengthDirective,
                input_directives_1.IsEmailDirective,
                input_directives_1.IsPasswordDirective,
                dashboard_page_component_1.DashBoardPageComponent,
                side_drawer_component_1.SideDrawerComponent,
                side_drawer_item_component_1.SideDrawerItemComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4R0FBMEc7QUFDMUcsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsaUVBQStEO0FBQy9ELDBFQUF3RTtBQUN4RSwwRUFBd0U7QUFDeEUsdUVBQThEO0FBQzlELG1FQUErRTtBQUMvRSwyRUFBd0U7QUFDeEUsK0RBQXVFO0FBQ3ZFLDREQUFvRztBQUNwRyx3Q0FBa0U7QUFDbEUsNEZBQXlGO0FBQ3pGLGtFQUF3RjtBQUN4RiwrRkFBNEY7QUEwQzVGO0lBQ0k7SUFBZ0IsQ0FBQztJQURSLFNBQVM7UUF4Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG9DQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QiwyQkFBbUI7Z0JBQ25CLG1CQUFXO2dCQUNYLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsSUFBSSxFQUFFLDJCQUEyQjtpQkFDcEMsQ0FBQztnQkFDRix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixzQ0FBaUI7Z0JBQ2pCLHFDQUFrQjtnQkFDbEIsbUNBQWdCO2dCQUNoQixzQ0FBbUI7Z0JBQ25CLGlEQUFzQjtnQkFDdEIsMkNBQW1CO2dCQUNuQixvREFBdUI7YUFDMUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsdUNBQWlCO2dCQUNqQixvQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFOzs7T0FDVyxTQUFTLENBRXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZGVEcmF3ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50cy9zaWRlLWRyYXdlci1pdGVtL3NpZGUtZHJhd2VyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUdXRvcmlhbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEdsb2JhbERhdGFIYW5kbGVyIH0gZnJvbSBcIi4vc2hhcmVkL21vZGVscy9nbG9iYWwtZGF0YS1oYW5kbGVyXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNaW5MZW5ndGhEaXJlY3RpdmUsIElzRW1haWxEaXJlY3RpdmUsIElzUGFzc3dvcmREaXJlY3RpdmUgfSBmcm9tIFwiLi91dGlsL2lucHV0LmRpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBEYXNoQm9hcmRQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9zaWRlLWRyYXdlci9zaWRlLWRyYXdlci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcycsXG4gICAgICAgIH0pLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgVHV0b3JpYWxDb21wb25lbnQsXG4gICAgICAgIE1pbkxlbmd0aERpcmVjdGl2ZSxcbiAgICAgICAgSXNFbWFpbERpcmVjdGl2ZSxcbiAgICAgICAgSXNQYXNzd29yZERpcmVjdGl2ZSxcbiAgICAgICAgRGFzaEJvYXJkUGFnZUNvbXBvbmVudCxcbiAgICAgICAgU2lkZURyYXdlckNvbXBvbmVudCxcbiAgICAgICAgU2lkZURyYXdlckl0ZW1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHbG9iYWxEYXRhSGFuZGxlcixcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19