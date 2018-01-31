import { ContactModel } from './../../shared/models/contacts.model';

import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
export const permissions = require('nativescript-permissions');
export const contacts = require('nativescript-contacts');
declare const android: any;

@Component({
    selector: "ns-dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard-page.component.html"
})
export class DashBoardPageComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    public contactsList:Array<ContactModel> = [];
    public viewUpdated:boolean;

    constructor() {
       this.viewUpdated = false;
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

}