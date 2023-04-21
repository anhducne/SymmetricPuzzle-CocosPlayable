"use strict";
cc._RF.push(module, 'f018fqjS+FOY5rzYE9gm/cz', 'DragRotate');
// SymmetricGamePlay/Scripts/DragRotate.ts

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
var GlobalGamePlay_1 = require("../../Scripts/Common/Base/GlobalGamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragRotate = /** @class */ (function (_super) {
    __extends(DragRotate, _super);
    function DragRotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeTarget = null;
        _this.touchPos = null;
        _this.boolOnTouch = false;
        _this.isControllable = false;
        _this.isTouchMove = false;
        _this.onDoneMerge = false;
        return _this;
    }
    DragRotate.prototype.start = function () {
        this.touchPos = this.node.getPosition();
        this.ActiveEvent(true);
        this.isControllable = true;
        this.ScanAngleNode();
        this.onDoneMerge = false;
    };
    DragRotate.prototype.update = function (dt) {
        if (this.boolOnTouch) {
            if (!this.onDoneMerge) {
                this.DragPuzze();
            }
        }
    };
    DragRotate.prototype.ActiveEvent = function (bool) {
        if (bool) {
            this.node.on(cc.Node.EventType.TOUCH_START, this.ontouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ontouchMove, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.ontouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ontouchEnd, this);
        }
        else {
            this.node.off(cc.Node.EventType.TOUCH_START, this.ontouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.ontouchMove, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.ontouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.ontouchEnd, this);
        }
    };
    DragRotate.prototype.ontouchStart = function (event) {
        if (this.isControllable) {
            this.boolOnTouch = true;
            // cc.log("On 1 click !");   
            // if(!this.onDoneMerge){
            //     this.RotateObject45();
            // }
        }
    };
    DragRotate.prototype.ontouchMove = function (event) {
        if (this.isControllable) {
            this.boolOnTouch = true;
            this.isTouchMove = true;
            var delta = event.getDelta();
            this.touchPos.x += delta.x;
            this.touchPos.y += delta.y;
        }
    };
    DragRotate.prototype.ontouchEnd = function (event) {
        if (this.isControllable) {
            if (!this.onDoneMerge) {
                if (!this.isTouchMove) {
                    this.RotateObject45();
                }
            }
            this.isTouchMove = false;
            var a = Math.sqrt((this.node.x - this.nodeTarget.x) * (this.node.x - this.nodeTarget.x) +
                (this.node.y - this.nodeTarget.y) * (this.node.y - this.nodeTarget.y));
        }
    };
    DragRotate.prototype.RotateObject45 = function () {
        // Plus rotate angle 
        this.node.angle -= 45;
        if (this.node.angle == -360) {
            this.node.angle = 0;
        }
        cc.audioEngine.playEffect(GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.soundManager.TouchSound, false);
        //cc.log("Angle now: " + this.node.angle);
        this.ScanAngleNode();
    };
    DragRotate.prototype.ScanAngleNode = function () {
        var tempIndex;
        if (Math.abs(this.node.angle) === 0) {
            tempIndex = 0;
        }
        else if (Math.abs(this.node.angle) === 45) {
            tempIndex = 1;
        }
        else if (Math.abs(this.node.angle) === 90) {
            tempIndex = 2;
        }
        else if (Math.abs(this.node.angle) === 135) {
            tempIndex = 3;
        }
        else if (Math.abs(this.node.angle) === 180) {
            tempIndex = 4;
        }
        else if (Math.abs(this.node.angle) === 225) {
            tempIndex = 5;
        }
        else if (Math.abs(this.node.angle) === 270) {
            tempIndex = 6;
        }
        else if (Math.abs(this.node.angle) === 315) {
            tempIndex = 7;
        }
        else if (Math.abs(this.node.angle) === 360) {
            tempIndex = 8;
        }
        //cc.log("Index temp now: " + tempIndex);
        switch (this.puzzeStage) {
            case 1:
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.indexPuzze11 = tempIndex;
                break;
            case 2:
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.indexPuzze12 = tempIndex;
                break;
            case 3:
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.indexPuzze2 = tempIndex;
                break;
            case 4:
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.indexPuzze3 = tempIndex;
                break;
            default:
                break;
        }
        //cc.log("PuzzeStageNow: " + this.puzzeStage);
    };
    DragRotate.prototype.DragPuzze = function () {
        if (this.touchPos.x >= -300 && this.touchPos.x <= 300) {
            this.node.x = cc.misc.lerp(this.node.x, this.touchPos.x, 0.7);
        }
        //cc.log("x pos: " + this.node.x);
        if (this.touchPos.y <= 500 && this.touchPos.y >= -500) {
            this.node.y = cc.misc.lerp(this.node.y, this.touchPos.y, 0.7);
        }
        //cc.log("y pos: " + this.node.y);
        // this.node.x = cc.misc.lerp(this.node.x, this.touchPos.x, 0.7);
        // this.node.y = cc.misc.lerp(this.node.y, this.touchPos.y, 0.7)
    };
    __decorate([
        property(cc.Node)
    ], DragRotate.prototype, "nodeTarget", void 0);
    __decorate([
        property(cc.Float)
    ], DragRotate.prototype, "puzzeStage", void 0);
    DragRotate = __decorate([
        ccclass
    ], DragRotate);
    return DragRotate;
}(cc.Component));
exports.default = DragRotate;

cc._RF.pop();