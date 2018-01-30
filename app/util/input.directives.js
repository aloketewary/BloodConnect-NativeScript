"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MinLengthDirective = /** @class */ (function () {
    function MinLengthDirective() {
    }
    MinLengthDirective_1 = MinLengthDirective;
    MinLengthDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= this.minlength ? null : { "minlength": true };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MinLengthDirective.prototype, "minlength", void 0);
    MinLengthDirective = MinLengthDirective_1 = __decorate([
        core_1.Directive({
            selector: '[minlength]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MinLengthDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], MinLengthDirective);
    return MinLengthDirective;
    var MinLengthDirective_1;
}());
exports.MinLengthDirective = MinLengthDirective;
var IsEmailDirective = /** @class */ (function () {
    function IsEmailDirective() {
    }
    IsEmailDirective_1 = IsEmailDirective;
    IsEmailDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'email': true };
    };
    IsEmailDirective = IsEmailDirective_1 = __decorate([
        core_1.Directive({
            selector: '[email]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsEmailDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], IsEmailDirective);
    return IsEmailDirective;
    var IsEmailDirective_1;
}());
exports.IsEmailDirective = IsEmailDirective;
var IsPasswordDirective = /** @class */ (function () {
    function IsPasswordDirective() {
    }
    IsPasswordDirective_1 = IsPasswordDirective;
    IsPasswordDirective.prototype.validate = function (control) {
        var pwdRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var valid = pwdRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'password': true };
    };
    IsPasswordDirective = IsPasswordDirective_1 = __decorate([
        core_1.Directive({
            selector: '[password]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsPasswordDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], IsPasswordDirective);
    return IsPasswordDirective;
    var IsPasswordDirective_1;
}());
exports.IsPasswordDirective = IsPasswordDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlucHV0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsd0NBQTJFO0FBTTNFO0lBSUk7SUFBc0IsQ0FBQzsyQkFKZCxrQkFBa0I7SUFNcEIscUNBQVEsR0FBZixVQUFnQixPQUF3QjtRQUNwQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkcsQ0FBQztJQU5RO1FBQVIsWUFBSyxFQUFFOzt5REFBbUI7SUFGbEIsa0JBQWtCO1FBSjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDdEYsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQzs7Q0FBQSxBQVZELElBVUM7QUFWWSxnREFBa0I7QUFnQi9CO0lBRUk7SUFBc0IsQ0FBQzt5QkFGZCxnQkFBZ0I7SUFJbEIsbUNBQVEsR0FBZixVQUFnQixPQUF3QjtRQUNwQyxJQUFJLFVBQVUsR0FBRyx5SkFBeUosQ0FBQztRQUMzSyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQy9ELENBQUM7SUFSUSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUNwRixDQUFDOztPQUNXLGdCQUFnQixDQVU1QjtJQUFELHVCQUFDOztDQUFBLEFBVkQsSUFVQztBQVZZLDRDQUFnQjtBQWlCN0I7SUFFSTtJQUFzQixDQUFDOzRCQUZkLG1CQUFtQjtJQUlyQixzQ0FBUSxHQUFmLFVBQWdCLE9BQXdCO1FBQ3BDLElBQUksUUFBUSxHQUFHLHFDQUFxQyxDQUFDO1FBQ3JELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDbEUsQ0FBQztJQVJRLG1CQUFtQjtRQUovQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQWEsRUFBRSxXQUFXLEVBQUUscUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3ZGLENBQUM7O09BQ1csbUJBQW1CLENBVS9CO0lBQUQsMEJBQUM7O0NBQUEsQUFWRCxJQVVDO0FBVlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWlubGVuZ3RoXScsXHJcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IE1pbkxlbmd0aERpcmVjdGl2ZSwgbXVsdGk6IHRydWV9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWluTGVuZ3RoRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuXHJcbiAgICBASW5wdXQoKSBtaW5sZW5ndGg6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICAgICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IGNvbnRyb2wudmFsdWUubGVuZ3RoID49IHRoaXMubWlubGVuZ3RoID8gbnVsbCA6IHsgXCJtaW5sZW5ndGhcIjogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tlbWFpbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBJc0VtYWlsRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0VtYWlsRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICAgICAgbGV0IGVtYWlsUmVnRXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gZW1haWxSZWdFeC50ZXN0KGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgMSB8fCB2YWxpZCA/IG51bGwgOiB7J2VtYWlsJzogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1twYXNzd29yZF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBJc1Bhc3N3b3JkRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc1Bhc3N3b3JkRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICAgICAgbGV0IHB3ZFJlZ0V4ID0gLyg/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkuezYsfS87XHJcbiAgICAgICAgbGV0IHZhbGlkID0gcHdkUmVnRXgudGVzdChjb250cm9sLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IDEgfHwgdmFsaWQgPyBudWxsIDogeydwYXNzd29yZCc6IHRydWV9O1xyXG4gICAgfVxyXG5cclxufSJdfQ==