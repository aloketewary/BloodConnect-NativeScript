import { Component, Injectable } from "@angular/core";
import { GlobalDataHandler } from "./shared/models/global-data-handler";
var Sqlite = require("nativescript-sqlite");
import { getBoolean } from 'application-settings';
import { Constant } from "./util/constant";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
const firebase = require("nativescript-plugin-firebase");

firebase.init({}).then(instance => {
    console.log("firebase.init done");
}, error => {
    console.log(`firebase.init error: ${error}`);
}
);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

@Injectable()
export class AppComponent {

    constructor(private globalDP: GlobalDataHandler, private router: RouterExtensions) {
        if (getBoolean(Constant.TUTORIAL_SHOWN, false)) {
            if (getBoolean(Constant.IS_LOGGEDIN, false)) {
                this.router.navigate(["/dashboard"], {
                    clearHistory: true, transition: {
                        name: 'fade',
                        duration: 1000
                    }
                });
            } else {
                this.router.navigate(["/login"], {
                    clearHistory: true, transition: {
                        name: 'fade',
                        duration: 1000
                    }
                });
            }
        }
        (new Sqlite("bloodcontact.db")).then(db => {
            this.globalDP.database = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS app_config (key TEXT, value TEXT)").then(id => {
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }
}
