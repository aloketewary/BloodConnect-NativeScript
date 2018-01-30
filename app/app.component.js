"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_data_handler_1 = require("./shared/models/global-data-handler");
var Sqlite = require("nativescript-sqlite");
var application_settings_1 = require("application-settings");
var constant_1 = require("./util/constant");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var firebase = require("nativescript-plugin-firebase");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppComponent = /** @class */ (function () {
    function AppComponent(globalDP, router) {
        var _this = this;
        this.globalDP = globalDP;
        this.router = router;
        if (application_settings_1.getBoolean(constant_1.Constant.TUTORIAL_SHOWN, false)) {
            if (application_settings_1.getBoolean(constant_1.Constant.IS_LOGGEDIN, false)) {
                this.router.navigate(["/dashboard"], {
                    clearHistory: true, transition: {
                        name: 'fade',
                        duration: 1000
                    }
                });
            }
            else {
                this.router.navigate(["/login"], {
                    clearHistory: true, transition: {
                        name: 'fade',
                        duration: 1000
                    }
                });
            }
        }
        (new Sqlite("bloodcontact.db")).then(function (db) {
            _this.globalDP.database = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS app_config (key TEXT, value TEXT)").then(function (id) {
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [global_data_handler_1.GlobalDataHandler, router_extensions_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0Q7QUFDdEQsMkVBQXdFO0FBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzVDLDZEQUFrRDtBQUNsRCw0Q0FBMkM7QUFDM0MsbUZBQWlGO0FBQ2pGLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FDQSxDQUFDO0FBUUY7SUFFSSxzQkFBb0IsUUFBMkIsRUFBVSxNQUF3QjtRQUFqRixpQkEyQkM7UUEzQm1CLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDN0UsRUFBRSxDQUFDLENBQUMsaUNBQVUsQ0FBQyxtQkFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsaUNBQVUsQ0FBQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ2pDLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dCQUM1QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDakI7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdCLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dCQUM1QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDakI7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFDRCxDQUFDLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUM1QixFQUFFLENBQUMsT0FBTyxDQUFDLDhEQUE4RCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUNsRixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0JRLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztRQUVELGlCQUFVLEVBQUU7eUNBR3FCLHVDQUFpQixFQUFrQixvQ0FBZ0I7T0FGeEUsWUFBWSxDQThCeEI7SUFBRCxtQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdsb2JhbERhdGFIYW5kbGVyIH0gZnJvbSBcIi4vc2hhcmVkL21vZGVscy9nbG9iYWwtZGF0YS1oYW5kbGVyXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5pbXBvcnQgeyBnZXRCb29sZWFuIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi91dGlsL2NvbnN0YW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuZmlyZWJhc2UuaW5pdCh7fSkudGhlbihpbnN0YW5jZSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG59LCBlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG59XG4pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxEUDogR2xvYmFsRGF0YUhhbmRsZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIGlmIChnZXRCb29sZWFuKENvbnN0YW50LlRVVE9SSUFMX1NIT1dOLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIGlmIChnZXRCb29sZWFuKENvbnN0YW50LklTX0xPR0dFRElOLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGFzaGJvYXJkXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSwgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZhZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLCB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmFkZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKG5ldyBTcWxpdGUoXCJibG9vZGNvbnRhY3QuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxEUC5kYXRhYmFzZSA9IGRiO1xuICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFwcF9jb25maWcgKGtleSBURVhULCB2YWx1ZSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19