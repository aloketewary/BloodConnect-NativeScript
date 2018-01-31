import { Constant } from './../../../util/constant';
import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/user-profile.model";
import { getString } from "tns-core-modules/application-settings/application-settings";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "SideDrawer",
    moduleId: module.id,
    templateUrl: "./side-drawer.component.html",
})
export class SideDrawerComponent implements OnInit {

    @Input() selectedPage: string;
    userProfile: UserProfile;

    constructor() {
        this.userProfile = new UserProfile();
    }

    ngOnInit(): void {
        this.userProfile.username = getString(Constant.name, 'Aloke');
        this.userProfile.emailId = getString(Constant.LOGGEDIN_USER_EMAIL);
    }

    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}