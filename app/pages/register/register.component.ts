import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { AuthenticationService } from "../../shared/services/auth.service";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { User } from "../../shared/models/user.model";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
const validator = require("email-validator");
import { Color } from "tns-core-modules/color";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { connectionType, getConnectionType } from "connectivity";

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
    user: User;
    passwordConfirm: string;
    private feedback: Feedback;

    constructor(
        private routerExt: RouterExtensions,
        private authService: AuthenticationService
    ) {
        this.user = new User();
        this.feedback = new Feedback();
    }

    ngOnInit(): void {

    }

    onSignupWithSocialProviderButtonTap(): void {

    }

    onSignupButtonTap(): void {
        if (!this.isValidEmail(this.user.email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.user.password !== this.passwordConfirm || this.user.password === null || this.passwordConfirm === undefined) {
            alert("Password mismatched...");
            return;
        }
        if (getConnectionType() === connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new Color("black"),
            });
            return;
        }
        this.authService.signup(this.user.email, this.user.password).then((res: any) => {
            if (res.key) {
                TNSFancyAlert.showSuccess("Login Error",
                    "Requires an internet connection to log in.", "Dismiss");
            } else {
                this.feedback.error({
                    title: "Signup error",
                    titleColor: new Color("black"),
                    message: 'The email address is already in use.',
                    messageColor: new Color("black"),
                });
            }
        });

    }

    gotoLogin() {
        this.routerExt.navigate(["/login"], { clearHistory: true });
    }

    isValidEmail(email) {
        return validator.validate(email);
    }
}
