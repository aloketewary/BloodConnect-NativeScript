"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
require("rxjs/add/observable/of");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.className = 'AuthenticationService';
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: email,
                password: password
            }
        })
            .then(function (result) {
            console.log(JSON.stringify(result) + '  this is >>>>>>>>>>>>');
            return result;
        })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.of(_this.resData);
        });
    };
    AuthenticationService.prototype.loginUsingGoogle = function (email, password) {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.GOOGLE,
            // Optional 
            googleOptions: {
                hostedDomain: "mygsuitedomain.com"
            }
        }).then(function (result) {
            _this.resData = result;
        }, function (error) {
            console.error(error);
            _this.resData = null;
        });
        return Observable_1.Observable.of(this.resData);
    };
    AuthenticationService.prototype.signup = function (email, password) {
        return firebase.createUser({
            email: email,
            password: password
        }).then(function (result) {
            return result;
        }).catch(function (errorMessage) {
            return errorMessage;
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHNDQUEyQztBQUMzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxrQ0FBZ0M7QUFHaEM7SUFHSTtRQUZVLGNBQVMsR0FBRyx1QkFBdUIsQ0FBQztJQUU5QixDQUFDO0lBRWpCLHFDQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0I7UUFBckMsaUJBZ0JDO1FBZkcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDckI7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsS0FBYSxFQUFFLFFBQWdCO1FBQWhELGlCQWVDO1FBZEcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDL0IsWUFBWTtZQUNaLGFBQWEsRUFBRTtnQkFDWCxZQUFZLEVBQUUsb0JBQW9CO2FBQ3JDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsUUFBZ0I7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkIsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsWUFBWTtZQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpEUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTs7T0FDQSxxQkFBcUIsQ0FrRGpDO0lBQUQsNEJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcbiAgICBwcm90ZWN0ZWQgY2xhc3NOYW1lID0gJ0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XHJcbiAgICByZXNEYXRhOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSArICcgIHRoaXMgaXMgPj4+Pj4+Pj4+Pj4+Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLnJlc0RhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzaW5nR29vZ2xlKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRSxcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgXHJcbiAgICAgICAgICAgIGdvb2dsZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGhvc3RlZERvbWFpbjogXCJteWdzdWl0ZWRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc0RhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNEYXRhID0gbnVsbDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLnJlc0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KS5jYXRjaChlcnJvck1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19