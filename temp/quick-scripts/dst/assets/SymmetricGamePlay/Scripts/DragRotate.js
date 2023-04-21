
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SymmetricGamePlay/Scripts/DragRotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3ltbWV0cmljR2FtZVBsYXlcXFNjcmlwdHNcXERyYWdSb3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkVBQXNFO0FBSWhFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUF3SkM7UUFwSkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUloQyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUEwSWpDLENBQUM7SUF4SUcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRVMsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKO0lBRUwsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLElBQUcsSUFBSSxFQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FB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bnQiOlsiXHJcbmltcG9ydCBHbG9iYWxHYW1lUGxheSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9Db21tb24vQmFzZS9HbG9iYWxHYW1lUGxheVwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9TY3JpcHRzL0NvbW1vbi9CYXNlL0dsb2JhbFwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9TY3JpcHRzL0NvbW1vbi9Tb3VuZE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ1JvdGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub2RlVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgdG91Y2hQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgYm9vbE9uVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQ29udHJvbGxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdXp6ZVN0YWdlOiBudW1iZXIgO1xyXG5cclxuICAgIGlzVG91Y2hNb3ZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Eb25lTWVyZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuQWN0aXZlRXZlbnQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pc0NvbnRyb2xsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5TY2FuQW5nbGVOb2RlKCk7XHJcbiAgICAgICAgdGhpcy5vbkRvbmVNZXJnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJvb2xPblRvdWNoKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLm9uRG9uZU1lcmdlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhZ1B1enplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEFjdGl2ZUV2ZW50KGJvb2w6IGJvb2xlYW4pe1xyXG4gICAgICAgIGlmKGJvb2wpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub250b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub250b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9udG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9udG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9udG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9udG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vbnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb250b3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0NvbnRyb2xsYWJsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbE9uVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJPbiAxIGNsaWNrICFcIik7ICAgXHJcbiAgICAgICAgICAgIC8vIGlmKCF0aGlzLm9uRG9uZU1lcmdlKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuUm90YXRlT2JqZWN0NDUoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbnRvdWNoTW92ZShldmVudDogY2MuVG91Y2gpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNDb250cm9sbGFibGUpe1xyXG4gICAgICAgICAgICB0aGlzLmJvb2xPblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hQb3MueCArPSBkZWx0YS54O1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoUG9zLnkgKz0gZGVsdGEueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb250b3VjaEVuZChldmVudDogY2MuVG91Y2gpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNDb250cm9sbGFibGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5vbkRvbmVNZXJnZSl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pc1RvdWNoTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Sb3RhdGVPYmplY3Q0NSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGEgPSBNYXRoLnNxcnQoKHRoaXMubm9kZS54IC0gdGhpcy5ub2RlVGFyZ2V0LngpICogKHRoaXMubm9kZS54IC0gdGhpcy5ub2RlVGFyZ2V0LngpICtcclxuICAgICAgICAgICAgICAgICh0aGlzLm5vZGUueSAtIHRoaXMubm9kZVRhcmdldC55KSAqICh0aGlzLm5vZGUueSAtIHRoaXMubm9kZVRhcmdldC55KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIFJvdGF0ZU9iamVjdDQ1KCl7XHJcbiAgICAvLyBQbHVzIHJvdGF0ZSBhbmdsZSBcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgLT0gNDU7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLmFuZ2xlID09IC0zNjApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5zb3VuZE1hbmFnZXIuVG91Y2hTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiQW5nbGUgbm93OiBcIiArIHRoaXMubm9kZS5hbmdsZSk7XHJcbiAgICAgICAgdGhpcy5TY2FuQW5nbGVOb2RlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBTY2FuQW5nbGVOb2RlKCl7XHJcbiAgICAgICAgbGV0IHRlbXBJbmRleDtcclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLm5vZGUuYW5nbGUpID09PSAwKXtcclxuICAgICAgICAgICAgdGVtcEluZGV4ID0gMDtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyh0aGlzLm5vZGUuYW5nbGUpID09PSA0NSl7XHJcbiAgICAgICAgICAgIHRlbXBJbmRleCA9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYoTWF0aC5hYnModGhpcy5ub2RlLmFuZ2xlKSA9PT0gOTApe1xyXG4gICAgICAgICAgICB0ZW1wSW5kZXggPSAyO1xyXG4gICAgICAgIH1lbHNlIGlmKE1hdGguYWJzKHRoaXMubm9kZS5hbmdsZSkgPT09IDEzNSl7XHJcbiAgICAgICAgICAgIHRlbXBJbmRleCA9IDM7XHJcbiAgICAgICAgfWVsc2UgaWYoTWF0aC5hYnModGhpcy5ub2RlLmFuZ2xlKSA9PT0gMTgwKXtcclxuICAgICAgICAgICAgdGVtcEluZGV4ID0gNDtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyh0aGlzLm5vZGUuYW5nbGUpID09PSAyMjUpe1xyXG4gICAgICAgICAgICB0ZW1wSW5kZXggPSA1O1xyXG4gICAgICAgIH1lbHNlIGlmKE1hdGguYWJzKHRoaXMubm9kZS5hbmdsZSkgPT09IDI3MCl7XHJcbiAgICAgICAgICAgIHRlbXBJbmRleCA9IDY7XHJcbiAgICAgICAgfWVsc2UgaWYoTWF0aC5hYnModGhpcy5ub2RlLmFuZ2xlKSA9PT0gMzE1KXtcclxuICAgICAgICAgICAgdGVtcEluZGV4ID0gNztcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyh0aGlzLm5vZGUuYW5nbGUpID09PSAzNjApe1xyXG4gICAgICAgICAgICB0ZW1wSW5kZXggPSA4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jYy5sb2coXCJJbmRleCB0ZW1wIG5vdzogXCIgKyB0ZW1wSW5kZXgpO1xyXG5cclxuICAgICAgICBzd2l0Y2godGhpcy5wdXp6ZVN0YWdlKXtcclxuICAgICAgICAgICAgY2FzZSAxOiBcclxuICAgICAgICAgICAgICAgIEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5pbmRleFB1enplMTEgPSB0ZW1wSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5LmluZGV4UHV6emUxMiA9IHRlbXBJbmRleDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxHYW1lUGxheS5JbnN0YW5jZShHbG9iYWxHYW1lUGxheSkuZ2FtZXBsYXkuaW5kZXhQdXp6ZTIgPSB0ZW1wSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OiBcclxuICAgICAgICAgICAgICAgIEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5pbmRleFB1enplMyA9IHRlbXBJbmRleDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NjLmxvZyhcIlB1enplU3RhZ2VOb3c6IFwiICsgdGhpcy5wdXp6ZVN0YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBEcmFnUHV6emUoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy50b3VjaFBvcy54ID49IC0zMDAgJiYgdGhpcy50b3VjaFBvcy54IDw9IDMwMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gY2MubWlzYy5sZXJwKHRoaXMubm9kZS54LCB0aGlzLnRvdWNoUG9zLngsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2MubG9nKFwieCBwb3M6IFwiICsgdGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKHRoaXMudG91Y2hQb3MueSA8PSA1MDAgJiYgdGhpcy50b3VjaFBvcy55ID49IC01MDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IGNjLm1pc2MubGVycCh0aGlzLm5vZGUueSwgdGhpcy50b3VjaFBvcy55LCAwLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2MubG9nKFwieSBwb3M6IFwiICsgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS54ID0gY2MubWlzYy5sZXJwKHRoaXMubm9kZS54LCB0aGlzLnRvdWNoUG9zLngsIDAuNyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnkgPSBjYy5taXNjLmxlcnAodGhpcy5ub2RlLnksIHRoaXMudG91Y2hQb3MueSwgMC43KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==