import { Constant } from './../../util/constant';
import { User } from './../../shared/models/user.model';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { connectionType, getConnectionType } from "connectivity";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { Color } from "tns-core-modules/color";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
const validator = require("email-validator");

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { AuthenticationService } from '../../shared/services/auth.service';
const frameModule = require("ui/frame");
const application = require("application");
import { setBoolean, setString } from 'application-settings';

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn: boolean;
    isAuthenticating = false;
    snackbar: SnackBar;
    @ViewChild("formControls") formControls: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;
    private feedback: Feedback;
    public userProgressValue: number;

    activity = application.android.startActivity ||
        application.android.foregroundActivity ||
        frameModule.topmost().android.currentActivity ||
        frameModule.topmost().android.activity;
    lastPress: any;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private auth: AuthenticationService
    ) {
        this.user = new User();
        this.snackbar = new SnackBar();
        this.feedback = new Feedback();
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.userProgressValue = 250;

        setInterval(() => {
            this.userProgressValue += 1;
        }, 900);
    }

    onLoginWithSocialProviderButtonTap(loginProvider: string): void {
        if (getConnectionType() === connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new Color("black"),
            });
            this.isAuthenticating = false;
            return;
        }
        if (loginProvider === 'GOOGLE') {
            this.auth.loginUsingGoogle(this.user.email, this.user.password).subscribe((res) => {
                setTimeout(() => {
                    if (res) {
                        TNSFancyAlert.showSuccess("Login Error",
                            "Requires an internet connection to log in.", "Dismiss");
                    } else {
                        TNSFancyAlert.showInfo("Login Error",
                            "Requires an internet connection to log in.", "Dismiss");
                    }
                }, 1000);
            });
        }
    }

    onSigninButtonTap(): void {
        this.isAuthenticating = true;
        if (getConnectionType() === connectionType.none) {
            this.feedback.error({
                title: "No Internet Connection!",
                titleColor: new Color("black"),
                message: "Requires an internet connection to log in.",
                messageColor: new Color("black"),
            });
            this.isAuthenticating = false;
            return;
        }
        this.auth.login(this.user.email, this.user.password).then((res: any) => {
            if (res.uid) {
                this.feedback.success({
                    title: "Welcome " + res.email,
                    titleColor: new Color("black"),
                });
                setBoolean(Constant.IS_LOGGEDIN, true);
                setString(Constant.LOGGEDIN_USER_EMAIL, res.email);
                this.router.navigate(["/dashboard"], {clearHistory: true});
            } else {
                this.feedback.error({
                    message: "Logging in the user failed, cross check email and password",
                    messageColor: new Color("black"),
                });
                this.isAuthenticating = false;
            }
        });
    }

    onForgotPasswordTap(): void {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
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
    }

    isValidEmail(email) {
        return validator.validate(email);
    }

    gotoRegister() {
        this.router.navigate(["/register"], { clearHistory: true });
    }

    getUserProgressText() {
        return 'Already ' + this.userProgressValue + ' registered and counting more...';
    }
}
