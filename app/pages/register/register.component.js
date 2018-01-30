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
var page_1 = require("ui/page");
var connectivity_1 = require("connectivity");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(page, routerExt, authService) {
        this.page = page;
        this.routerExt = routerExt;
        this.authService = authService;
        this.user = new user_model_1.User();
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    RegisterComponent.prototype.onSignupWithSocialProviderButtonTap = function () {
    };
    RegisterComponent.prototype.onSignupButtonTap = function () {
        var _this = this;
        if (!this.isValidEmail(this.user.email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.user.password !== this.passwordConfirm) {
            alert("Password mismatched...");
            return;
        }
        if (this.user.password === undefined || this.passwordConfirm === undefined) {
            alert("Password required...");
            return;
        }
        if (!this.checkPassword(this.user.password)) {
            alert("Password must contain at least one digit/lowercase/uppercase letter and be at least six characters long");
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
        this.routerExt.navigate(['/login'], { clearHistory: true });
    };
    RegisterComponent.prototype.isValidEmail = function (email) {
        return validator.validate(email);
    };
    RegisterComponent.prototype.checkPassword = function (str) {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "Register",
            moduleId: module.id,
            templateUrl: "./register.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_extensions_1.RouterExtensions,
            auth_service_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1GQUFpRjtBQUNqRixtRUFBMkU7QUFDM0UsbUVBQXdEO0FBQ3hELDZEQUFzRDtBQUN0RCwrREFBaUY7QUFDakYsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDN0MsZ0RBQStDO0FBRy9DLGdDQUErQjtBQUMvQiw2Q0FBaUU7QUFPakU7SUFLSSwyQkFDWSxJQUFVLEVBQ1YsU0FBMkIsRUFDM0IsV0FBa0M7UUFGbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELCtEQUFtQyxHQUFuQztJQUVBLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFBQSxpQkF3Q0M7UUF2Q0csRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6RSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO1lBQ2pILE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxnQ0FBaUIsRUFBRSxLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDaEIsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsT0FBTyxFQUFFLDRDQUE0QztnQkFDckQsWUFBWSxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQzthQUNuQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ3ZFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNWLHVDQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDbkMsNENBQTRDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUNoQixLQUFLLEVBQUUsY0FBYztvQkFDckIsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztvQkFDOUIsT0FBTyxFQUFFLHNDQUFzQztvQkFDL0MsWUFBWSxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztpQkFDbkMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxHQUFHO1FBQ2IsOERBQThEO1FBQzlELDBCQUEwQjtRQUMxQixJQUFJLEVBQUUsR0FBRyxxQ0FBcUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBN0VRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FPb0IsV0FBSTtZQUNDLG9DQUFnQjtZQUNkLG9DQUFxQjtPQVJyQyxpQkFBaUIsQ0E4RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBGZWVkYmFjaywgRmVlZGJhY2tUeXBlLCBGZWVkYmFja1Bvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlJlZ2lzdGVyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgcGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25TaWdudXBXaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBvblNpZ251cEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPT0gdGhpcy5wYXNzd29yZENvbmZpcm0pIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGFzc3dvcmQgbWlzbWF0Y2hlZC4uLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkID09PSB1bmRlZmluZWQgfHwgdGhpcy5wYXNzd29yZENvbmZpcm0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZCByZXF1aXJlZC4uLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tQYXNzd29yZCh0aGlzLnVzZXIucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGlnaXQvbG93ZXJjYXNlL3VwcGVyY2FzZSBsZXR0ZXIgYW5kIGJlIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzIGxvbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suZXJyb3Ioe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vIEludGVybmV0IENvbm5lY3Rpb24hXCIsXG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAodGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucGFzc3dvcmQpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmtleSkge1xuICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoXCJMb2dpbiBFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiLCBcIkRpc21pc3NcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaWdudXAgZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZS4nLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdvdG9Mb2dpbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoWycvbG9naW4nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaXNWYWxpZEVtYWlsKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZW1haWwpO1xuICAgIH1cblxuICAgIGNoZWNrUGFzc3dvcmQoc3RyKSB7XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXIsIG9uZSBsb3dlcmNhc2UgYW5kIG9uZSB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIC8vIGF0IGxlYXN0IHNpeCBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciByZSA9IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pLns2LH0vO1xuICAgICAgICByZXR1cm4gcmUudGVzdChzdHIpO1xuICAgIH1cbn1cbiJdfQ==