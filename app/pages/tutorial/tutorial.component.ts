import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'ui/page';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { SwipeGestureEventData } from 'ui/gestures';
import { SnackBar } from 'nativescript-snackbar';
import { GlobalDataHandler } from '../../shared/models/global-data-handler';
import { Constant } from '../../util/constant';
import { setBoolean } from 'application-settings';

registerElement("Slide", () => require("nativescript-slides").Slide);
registerElement("SlideContainer", () => require("nativescript-slides").SlideContainer);

@Component({
    selector: 'ns-tutorial',
    moduleId: module.id,
    templateUrl: "./tutorial.component.html",
    styleUrls: ["./tutorial.component.css"],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class TutorialComponent implements OnInit {

    public images: Array<any> = [];
    public direction: number;
    public snackbar: SnackBar;
    iconState = 'in';
    gotitText: string;

    @ViewChild("slides") slides: ElementRef;

    constructor(private page: Page, private router: RouterExtensions, private globalDP: GlobalDataHandler) {
        this.snackbar = new SnackBar();
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.gotitText = 'Got it!';
    }

    ngAfterViewInit() {
        let SlidesXml = this.slides.nativeElement;
        SlidesXml.constructView();
    }

    skip() {
        setBoolean(Constant.TUTORIAL_SHOWN, true);
        this.router.navigate(["/login"], { clearHistory: true });
    }

    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Swipe Direction: " + args.direction);

        this.direction = args.direction;
        this.iconState = this.iconState === 'out' ? 'in' : 'out';
    }
}
