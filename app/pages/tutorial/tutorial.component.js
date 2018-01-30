"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var page_1 = require("ui/page");
var animations_1 = require("@angular/animations");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var global_data_handler_1 = require("../../shared/models/global-data-handler");
var constant_1 = require("../../util/constant");
var application_settings_1 = require("application-settings");
element_registry_1.registerElement("Slide", function () { return require("nativescript-slides").Slide; });
element_registry_1.registerElement("SlideContainer", function () { return require("nativescript-slides").SlideContainer; });
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(page, router, globalDP) {
        this.page = page;
        this.router = router;
        this.globalDP = globalDP;
        this.images = [];
        this.iconState = 'in';
        this.snackbar = new nativescript_snackbar_1.SnackBar();
    }
    TutorialComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.gotitText = 'Got it!';
    };
    TutorialComponent.prototype.ngAfterViewInit = function () {
        var SlidesXml = this.slides.nativeElement;
        SlidesXml.constructView();
    };
    TutorialComponent.prototype.skip = function () {
        application_settings_1.setBoolean(constant_1.Constant.TUTORIAL_SHOWN, true);
        this.router.navigate(["/login"], { clearHistory: true });
    };
    TutorialComponent.prototype.onSwipe = function (args) {
        console.log("Swipe!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Swipe Direction: " + args.direction);
        this.direction = args.direction;
        this.iconState = this.iconState === 'out' ? 'in' : 'out';
    };
    __decorate([
        core_1.ViewChild("slides"),
        __metadata("design:type", core_1.ElementRef)
    ], TutorialComponent.prototype, "slides", void 0);
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'ns-tutorial',
            moduleId: module.id,
            templateUrl: "./tutorial.component.html",
            styleUrls: ["./tutorial.component.css"],
            animations: [
                animations_1.trigger('slideInOut', [
                    animations_1.state('in', animations_1.style({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    animations_1.state('out', animations_1.style({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    animations_1.transition('in => out', animations_1.animate('400ms ease-in-out')),
                    animations_1.transition('out => in', animations_1.animate('400ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions, global_data_handler_1.GlobalDataHandler])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHV0b3JpYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBFQUF3RTtBQUN4RSxnQ0FBK0I7QUFDL0Isa0RBTTZCO0FBQzdCLG1GQUFpRjtBQUVqRiwrREFBaUQ7QUFDakQsK0VBQTRFO0FBQzVFLGdEQUErQztBQUMvQyw2REFBa0Q7QUFFbEQsa0NBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0FBQ3JFLGtDQUFlLENBQUMsZ0JBQWdCLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGNBQWMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBb0J2RjtJQVVJLDJCQUFvQixJQUFVLEVBQVUsTUFBd0IsRUFBVSxRQUEyQjtRQUFqRixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQVI5RixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRy9CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksaUNBQVUsQ0FBQyxtQkFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxJQUEyQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDN0QsQ0FBQztJQTdCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7cURBQUM7SUFSL0IsaUJBQWlCO1FBbEI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsVUFBVSxFQUFFO2dCQUNSLG9CQUFPLENBQUMsWUFBWSxFQUFFO29CQUNsQixrQkFBSyxDQUFDLElBQUksRUFBRSxrQkFBSyxDQUFDO3dCQUNkLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ3BDLENBQUMsQ0FBQztvQkFDSCxrQkFBSyxDQUFDLEtBQUssRUFBRSxrQkFBSyxDQUFDO3dCQUNmLFNBQVMsRUFBRSx5QkFBeUI7cUJBQ3ZDLENBQUMsQ0FBQztvQkFDSCx1QkFBVSxDQUFDLFdBQVcsRUFBRSxvQkFBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3JELHVCQUFVLENBQUMsV0FBVyxFQUFFLG9CQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDeEQsQ0FBQzthQUNMO1NBQ0osQ0FBQzt5Q0FXNEIsV0FBSSxFQUFrQixvQ0FBZ0IsRUFBb0IsdUNBQWlCO09BVjVGLGlCQUFpQixDQXNDN0I7SUFBRCx3QkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQge1xyXG4gICAgdHJpZ2dlcixcclxuICAgIHN0YXRlLFxyXG4gICAgc3R5bGUsXHJcbiAgICBhbmltYXRlLFxyXG4gICAgdHJhbnNpdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zbmFja2Jhcic7XHJcbmltcG9ydCB7IEdsb2JhbERhdGFIYW5kbGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9nbG9iYWwtZGF0YS1oYW5kbGVyJztcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50JztcclxuaW1wb3J0IHsgc2V0Qm9vbGVhbiB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIlNsaWRlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc2xpZGVzXCIpLlNsaWRlKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiU2xpZGVDb250YWluZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zbGlkZXNcIikuU2xpZGVDb250YWluZXIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLXR1dG9yaWFsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3R1dG9yaWFsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdHV0b3JpYWwuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdzbGlkZUluT3V0JywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnb3V0Jywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMTAwJSwgMCwgMCknXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW4gPT4gb3V0JywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ291dCA9PiBpbicsIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0JykpXHJcbiAgICAgICAgXSksXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUdXRvcmlhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGltYWdlczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNuYWNrYmFyOiBTbmFja0JhcjtcclxuICAgIGljb25TdGF0ZSA9ICdpbic7XHJcbiAgICBnb3RpdFRleHQ6IHN0cmluZztcclxuXHJcbiAgICBAVmlld0NoaWxkKFwic2xpZGVzXCIpIHNsaWRlczogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGdsb2JhbERQOiBHbG9iYWxEYXRhSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ290aXRUZXh0ID0gJ0dvdCBpdCEnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgU2xpZGVzWG1sID0gdGhpcy5zbGlkZXMubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBTbGlkZXNYbWwuY29uc3RydWN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihDb25zdGFudC5UVVRPUklBTF9TSE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3dpcGUhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudDogXCIgKyBhcmdzLm9iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudDogXCIgKyBhcmdzLnZpZXcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgbmFtZTogXCIgKyBhcmdzLmV2ZW50TmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgYXJncy5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaWNvblN0YXRlID0gdGhpcy5pY29uU3RhdGUgPT09ICdvdXQnID8gJ2luJyA6ICdvdXQnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==