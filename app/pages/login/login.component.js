"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./../../util/constant");
var user_model_1 = require("./../../shared/models/user.model");
var core_1 = require("@angular/core");
var connectivity_1 = require("connectivity");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var nativescript_feedback_1 = require("nativescript-feedback");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var color_1 = require("tns-core-modules/color");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var validator = require("email-validator");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var auth_service_1 = require("../../shared/services/auth.service");
var frameModule = require("ui/frame");
var application = require("application");
var application_settings_1 = require("application-settings");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, auth) {
        this.page = page;
        this.router = router;
        this.auth = auth;
        this.isAuthenticating = false;
        this.activity = application.android.startActivity ||
            application.android.foregroundActivity ||
            frameModule.topmost().android.currentActivity ||
            frameModule.topmost().android.activity;
        this.user = new user_model_1.User();
        this.snackbar = new nativescript_snackbar_1.SnackBar();
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this.userProgressValue = 250;
        setInterval(function () {
            _this.userProgressValue += 1;
        }, 900);
    };
    LoginComponent.prototype.onLoginWithSocialProviderButtonTap = function (loginProvider) {
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new color_1.Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new color_1.Color("black"),
            });
            this.isAuthenticating = false;
            return;
        }
        if (loginProvider === 'GOOGLE') {
            this.auth.loginUsingGoogle(this.user.email, this.user.password).subscribe(function (res) {
                setTimeout(function () {
                    if (res) {
                        nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Login Error", "Requires an internet connection to log in.", "Dismiss");
                    }
                    else {
                        nativescript_fancyalert_1.TNSFancyAlert.showInfo("Login Error", "Requires an internet connection to log in.", "Dismiss");
                    }
                }, 1000);
            });
        }
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        this.isAuthenticating = true;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new color_1.Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new color_1.Color("black"),
            });
            this.isAuthenticating = false;
            return;
        }
        this.auth.login(this.user.email, this.user.password).then(function (res) {
            if (res.uid) {
                _this.feedback.success({
                    title: "Welcome " + res.email,
                    titleColor: new color_1.Color("black"),
                });
                application_settings_1.setBoolean(constant_1.Constant.IS_LOGGEDIN, true);
                application_settings_1.setString(constant_1.Constant.LOGGEDIN_USER_EMAIL, res.email);
                _this.router.navigate(["/dashboard"], { clearHistory: true });
            }
            else {
                _this.feedback.error({
                    message: "Logging in the user failed, cross check email and password",
                    messageColor: new color_1.Color("black"),
                });
                _this.isAuthenticating = false;
            }
        });
    };
    LoginComponent.prototype.onForgotPasswordTap = function () {
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            console.log('>>> Login With' + data.text);
            // firebase.resetPassword({
            //     email: data.text
            // }).then(
            //     function () {
            //         alert({
            //             title: "Check your email..!",
            //             message: "Check your email for password reset",
            //             defaultText: "",
            //             okButtonText: "Ok",
            //         })
            //     },
            //     function (errorMessage) {
            //         console.log(errorMessage);
            //     }
            //     );
        });
    };
    LoginComponent.prototype.isValidEmail = function (email) {
        return validator.validate(email);
    };
    LoginComponent.prototype.gotoRegister = function () {
        this.router.navigate(["/register"], { clearHistory: true });
    };
    LoginComponent.prototype.getUserProgressText = function () {
        return 'Already ' + this.userProgressValue + ' registered and counting more...';
    };
    __decorate([
        core_1.ViewChild("formControls"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "formControls", void 0);
    __decorate([
        core_1.ViewChild("email"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_extensions_1.RouterExtensions,
            auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWlEO0FBQ2pELCtEQUF3RDtBQUN4RCxzQ0FBeUU7QUFDekUsNkNBQWlFO0FBQ2pFLG1FQUF3RDtBQUN4RCwrREFBaUY7QUFDakYsK0RBQWtFO0FBQ2xFLGdEQUErQztBQUUvQyxzQ0FBb0M7QUFDcEMsZ0NBQStCO0FBQy9CLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRzdDLG1GQUFpRjtBQUNqRixtRUFBMkU7QUFDM0UsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyw2REFBNkQ7QUFPN0Q7SUFpQkksd0JBQ1ksSUFBVSxFQUNWLE1BQXdCLEVBQ3hCLElBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQWpCdkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBUXpCLGFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFDeEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7WUFDdEMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlO1lBQzdDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBUXZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7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RUQscUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsa0NBQWtDLENBQUM7SUFDcEYsQ0FBQztJQTdIMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7d0RBQUM7SUFDaEM7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7aURBQUM7SUFDZjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQVBuQyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQW1Cb0IsV0FBSTtZQUNGLG9DQUFnQjtZQUNsQixvQ0FBcUI7T0FwQjlCLGNBQWMsQ0FtSTFCO0lBQUQscUJBQUM7Q0FBQSxBQW5JRCxJQW1JQztBQW5JWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50IH0gZnJvbSAnLi8uLi8uLi91dGlsL2NvbnN0YW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcbmltcG9ydCB7IEZlZWRiYWNrLCBGZWVkYmFja1Bvc2l0aW9uLCBGZWVkYmFja1R5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5jb25zdCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xuaW1wb3J0IHsgc2V0Qm9vbGVhbiwgc2V0U3RyaW5nIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luOiBib29sZWFuO1xuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICBzbmFja2JhcjogU25hY2tCYXI7XG4gICAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBGZWVkYmFjaztcbiAgICBwdWJsaWMgdXNlclByb2dyZXNzVmFsdWU6IG51bWJlcjtcblxuICAgIGFjdGl2aXR5ID0gYXBwbGljYXRpb24uYW5kcm9pZC5zdGFydEFjdGl2aXR5IHx8XG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5IHx8XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5hbmRyb2lkLmN1cnJlbnRBY3Rpdml0eSB8fFxuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuYW5kcm9pZC5hY3Rpdml0eTtcbiAgICBsYXN0UHJlc3M6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlclByb2dyZXNzVmFsdWUgPSAyNTA7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyUHJvZ3Jlc3NWYWx1ZSArPSAxO1xuICAgICAgICB9LCA5MDApO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAobG9naW5Qcm92aWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrLmVycm9yKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJObyBJbnRlcm5ldCBDb25uZWN0aW9uIVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZ2luUHJvdmlkZXIgPT09ICdHT09HTEUnKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgubG9naW5Vc2luZ0dvb2dsZSh0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIiwgXCJEaXNtaXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93SW5mbyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIiwgXCJEaXNtaXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gSW50ZXJuZXQgQ29ubmVjdGlvbiFcIixcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMudWlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2VsY29tZSBcIiArIHJlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0Qm9vbGVhbihDb25zdGFudC5JU19MT0dHRURJTiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKENvbnN0YW50LkxPR0dFRElOX1VTRVJfRU1BSUwsIHJlcy5lbWFpbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMb2dnaW5nIGluIHRoZSB1c2VyIGZhaWxlZCwgY3Jvc3MgY2hlY2sgZW1haWwgYW5kIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRm9yZ290UGFzc3dvcmRUYXAoKTogdm9pZCB7XG4gICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEdyb2NlcmllcyB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PiBMb2dpbiBXaXRoJyArIGRhdGEudGV4dCk7XG4gICAgICAgICAgICAvLyBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICAgICAgICAgIC8vICAgICBlbWFpbDogZGF0YS50ZXh0XG4gICAgICAgICAgICAvLyB9KS50aGVuKFxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6IFwiQ2hlY2sgeW91ciBlbWFpbC4uIVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWVzc2FnZTogXCJDaGVjayB5b3VyIGVtYWlsIGZvciBwYXNzd29yZCByZXNldFwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNWYWxpZEVtYWlsKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZW1haWwpO1xuICAgIH1cblxuICAgIGdvdG9SZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyUHJvZ3Jlc3NUZXh0KCkge1xuICAgICAgICByZXR1cm4gJ0FscmVhZHkgJyArIHRoaXMudXNlclByb2dyZXNzVmFsdWUgKyAnIHJlZ2lzdGVyZWQgYW5kIGNvdW50aW5nIG1vcmUuLi4nO1xuICAgIH1cbn1cbiJdfQ==