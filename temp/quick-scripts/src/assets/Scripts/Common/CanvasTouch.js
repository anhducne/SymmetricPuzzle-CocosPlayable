"use strict";
cc._RF.push(module, '11148qXbqhDWKPY+o1cTARf', 'CanvasTouch');
// Scripts/Common/CanvasTouch.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Base/Global");
var GlobalGamePlay_1 = require("./Base/GlobalGamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CanvasTouch = /** @class */ (function (_super) {
    __extends(CanvasTouch, _super);
    function CanvasTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidLink = "";
        _this.iosLink = "";
        _this.defaultLink = "";
        _this.isMouseDown = false;
        return _this;
    }
    CanvasTouch.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
    };
    CanvasTouch.prototype.TouchStart = function (event) {
        if (!Global_1.default.boolEndGame) {
            if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.firstTouch = true;
                this.isMouseDown = true;
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global_1.default.touchPos = mousePosition;
            }
        }
        else {
            this.openAdUrl();
        }
    };
    CanvasTouch.prototype.TouchMove = function (event) {
        if (this.isMouseDown) {
            if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global_1.default.touchPos = mousePosition;
            }
        }
    };
    CanvasTouch.prototype.TouchEnd = function (event) {
        if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
            this.isMouseDown = false;
            var mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
            Global_1.default.touchPos = mousePosition;
        }
    };
    CanvasTouch.prototype.openAdUrl = function () {
        var clickTag = '';
        window.androidLink = this.androidLink;
        window.iosLink = this.iosLink;
        window.defaultLink = this.defaultLink;
        if (window.openAdUrl) {
            window.openAdUrl();
        }
        else {
            window.open();
        }
    };
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "androidLink", void 0);
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "iosLink", void 0);
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "defaultLink", void 0);
    CanvasTouch = __decorate([
        ccclass
    ], CanvasTouch);
    return CanvasTouch;
}(cc.Component));
exports.default = CanvasTouch;

cc._RF.pop();