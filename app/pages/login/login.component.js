"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // this.page.actionBarHidden = true;
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
        if (!this.isValidEmail(this.user.email)) {
            alert("Enter a valid email address.");
            return;
        }
        // this.isAuthenticating = true;
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
                nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Login Error", "Requires an internet connection to log in.", "Dismiss");
            }
            else {
                nativescript_fancyalert_1.TNSFancyAlert.showInfo("Login Error", "Requires an internet connection to log in.", "Dismiss");
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
    __decorate([
        core_1.ViewChild("formControls"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "formControls", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQXdEO0FBQ3hELHNDQUF5RTtBQUN6RSw2Q0FBaUU7QUFDakUsbUVBQXdEO0FBQ3hELCtEQUFpRjtBQUNqRiwrREFBa0U7QUFDbEUsZ0RBQStDO0FBRS9DLHNDQUFvQztBQUNwQyxnQ0FBK0I7QUFDL0IsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFHN0MsbUZBQWlGO0FBQ2pGLG1FQUEyRTtBQUMzRSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBTzNDO0lBY0ksd0JBQ1ksSUFBVSxFQUNWLE1BQXdCLEVBQ3hCLElBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQWR2QyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFLekIsYUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUN4QyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQjtZQUN0QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWU7WUFDN0MsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFRdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxvQ0FBb0M7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IFVzZXIgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcbmltcG9ydCB7IEZlZWRiYWNrLCBGZWVkYmFja1Bvc2l0aW9uLCBGZWVkYmFja1R5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5jb25zdCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbmNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luOiBib29sZWFuO1xuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICBzbmFja2JhcjogU25hY2tCYXI7XG4gICAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7XG5cbiAgICBhY3Rpdml0eSA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eSB8fFxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSB8fFxuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuYW5kcm9pZC5jdXJyZW50QWN0aXZpdHkgfHxcbiAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmFuZHJvaWQuYWN0aXZpdHk7XG4gICAgbGFzdFByZXNzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAobG9naW5Qcm92aWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrLmVycm9yKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJObyBJbnRlcm5ldCBDb25uZWN0aW9uIVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvZ2luUHJvdmlkZXIgPT09ICdHT09HTEUnKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgubG9naW5Vc2luZ0dvb2dsZSh0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIiwgXCJEaXNtaXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93SW5mbyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIiwgXCJEaXNtaXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gSW50ZXJuZXQgQ29ubmVjdGlvbiFcIixcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMudWlkKSB7XG4gICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiRGlzbWlzc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93SW5mbyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiRGlzbWlzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Gb3Jnb3RQYXNzd29yZFRhcCgpOiB2b2lkIHtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR3JvY2VyaWVzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+IExvZ2luIFdpdGgnICsgZGF0YS50ZXh0KTtcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xuICAgICAgICAgICAgLy8gICAgIGVtYWlsOiBkYXRhLnRleHRcbiAgICAgICAgICAgIC8vIH0pLnRoZW4oXG4gICAgICAgICAgICAvLyAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogXCJDaGVjayB5b3VyIGVtYWlsLi4hXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBtZXNzYWdlOiBcIkNoZWNrIHlvdXIgZW1haWwgZm9yIHBhc3N3b3JkIHJlc2V0XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRW1haWwoZW1haWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZShlbWFpbCk7XG4gICAgfVxuXG4gICAgZ290b1JlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxufVxuIl19