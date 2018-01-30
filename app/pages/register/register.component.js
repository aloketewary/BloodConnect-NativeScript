"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var auth_service_1 = require("../../shared/services/auth.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var user_model_1 = require("../../shared/models/user.model");
var nativescript_feedback_1 = require("nativescript-feedback");
var validator = require("email-validator");
var color_1 = require("tns-core-modules/color");
var connectivity_1 = require("connectivity");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(routerExt, authService) {
        this.routerExt = routerExt;
        this.authService = authService;
        this.user = new user_model_1.User();
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSignupWithSocialProviderButtonTap = function () {
    };
    RegisterComponent.prototype.onSignupButtonTap = function () {
        var _this = this;
        if (!this.isValidEmail(this.user.email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.user.password !== this.passwordConfirm || this.user.password === null || this.passwordConfirm === undefined) {
            alert("Password mismatched...");
            return;
        }
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new color_1.Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new color_1.Color("black"),
            });
            return;
        }
        this.authService.signup(this.user.email, this.user.password).then(function (res) {
            if (res.key) {
                nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Login Error", "Requires an internet connection to log in.", "Dismiss");
            }
            else {
                _this.feedback.error({
                    title: "Signup error",
                    titleColor: new color_1.Color("black"),
                    message: 'The email address is already in use.',
                    messageColor: new color_1.Color("black"),
                });
            }
        });
    };
    RegisterComponent.prototype.gotoLogin = function () {
        this.routerExt.navigate(["/login"], { clearHistory: true });
    };
    RegisterComponent.prototype.isValidEmail = function (email) {
        return validator.validate(email);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "Register",
            moduleId: module.id,
            templateUrl: "./register.component.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            auth_service_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1GQUFpRjtBQUNqRixtRUFBMkU7QUFDM0UsbUVBQXdEO0FBQ3hELDZEQUFzRDtBQUN0RCwrREFBaUY7QUFDakYsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDN0MsZ0RBQStDO0FBSS9DLDZDQUFpRTtBQU9qRTtJQUtJLDJCQUNZLFNBQTJCLEVBQzNCLFdBQWtDO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsK0RBQW1DLEdBQW5DO0lBRUEsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUFBLGlCQWdDQztRQS9CRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuSCxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLEtBQUssRUFBRSx5QkFBeUI7Z0JBQ2hDLFVBQVUsRUFBRSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSw0Q0FBNEM7Z0JBQ3JELFlBQVksRUFBRSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUM7YUFDbkMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUN2RSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDVix1Q0FBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQ25DLDRDQUE0QyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDaEIsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxzQ0FBc0M7b0JBQy9DLFlBQVksRUFBRSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ25DLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUE3RFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQU95QixvQ0FBZ0I7WUFDZCxvQ0FBcUI7T0FQckMsaUJBQWlCLENBOEQ3QjtJQUFELHdCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgRmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIjtcbmNvbnN0IHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xuICAgIHByaXZhdGUgZmVlZGJhY2s6IEZlZWRiYWNrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgb25TaWdudXBXaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBvblNpZ251cEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPT0gdGhpcy5wYXNzd29yZENvbmZpcm0gfHwgdGhpcy51c2VyLnBhc3N3b3JkID09PSBudWxsIHx8IHRoaXMucGFzc3dvcmRDb25maXJtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGFzc3dvcmQgbWlzbWF0Y2hlZC4uLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTm8gSW50ZXJuZXQgQ29ubmVjdGlvbiFcIixcbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cCh0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMua2V5KSB7XG4gICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIkxvZ2luIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiRGlzbWlzc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNpZ251cCBlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlLicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ290b0xvZ2luKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlzVmFsaWRFbWFpbChlbWFpbCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKGVtYWlsKTtcbiAgICB9XG59XG4iXX0=