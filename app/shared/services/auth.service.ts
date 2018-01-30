import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {
    protected className = 'AuthenticationService';
    resData: any;
    constructor() { }

    login(email: string, password: string) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: email,
                password: password
            }
        })
            .then(result => {
                console.log(JSON.stringify(result) + '  this is >>>>>>>>>>>>');
                return result;
            })
            .catch(error => {
                console.error(error);
                return Observable.of(this.resData);
            });
    }

    loginUsingGoogle(email: string, password: string): Observable<any> {
        firebase.login({
            type: firebase.LoginType.GOOGLE,
            // Optional 
            googleOptions: {
                hostedDomain: "mygsuitedomain.com"
            }
        }).then(result => {
            this.resData = result;
        }, error => {
            console.error(error);
            this.resData = null;
        })

        return Observable.of(this.resData);
    }

    signup(email: string, password: string) {
        return firebase.createUser({
            email: email,
            password: password
        }).then(result => {
            return result;
        }).catch(errorMessage => {
            return errorMessage;
        });
    }
}