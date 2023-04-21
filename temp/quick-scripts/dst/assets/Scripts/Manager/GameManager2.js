
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Manager/GameManager2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05030Yx1itO5Jvj4xMY8rwx', 'GameManager2');
// Scripts/Manager/GameManager2.ts

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
var DragRotate_1 = require("../../SymmetricGamePlay/Scripts/DragRotate");
var Global_1 = require("../Common/Base/Global");
var Singleton_1 = require("../Common/Singleton");
var SoundManager_1 = require("../Common/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager2 = /** @class */ (function (_super) {
    __extends(GameManager2, _super);
    //MyConfig
    function GameManager2() {
        var _this = _super.call(this) || this;
        _this.soundManager = null;
        _this.endGame = false;
        _this.startAnchorX = -190;
        _this.endAnchorX = 190;
        _this.lengthOfSlider = 0;
        _this.firstTouch = false;
        _this.VFX_Node = null;
        //UI Config
        _this.isCanStartGame = false;
        _this.Guide_in = null;
        _this.Guide_win = null;
        // Area
        _this.FakeArea = null;
        _this.PlayArea = null;
        _this.arrayPuzze = [];
        _this.flag01 = false;
        _this.flag02 = false;
        _this.flag03 = false;
        _this.flag04 = false;
        _this.ironsource = false;
        _this.mindworks = false;
        _this.vungle = false;
        GameManager2_1._instance = _this;
        return _this;
    }
    GameManager2_1 = GameManager2;
    GameManager2.prototype.start = function () {
        if (this.mindworks) {
            window.gameReady && window.gameReady();
        }
        this.lengthOfSlider = this.endAnchorX - this.startAnchorX;
        this.isCanStartGame = true;
    };
    GameManager2.prototype.update = function (dt) {
        // this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]);
        this.StageCheckCorrect();
    };
    GameManager2.prototype.StageCheckCorrect = function () {
        var _this = this;
        if (!this.endGame) {
            if (this.indexPuzze11 == 0 && this.indexPuzze12 == 0) {
                if (this.GetDistance2Point(this.arrayPuzze[0], this.arrayPuzze[1]) <= 158.5 && this.GetDistance2Point(this.arrayPuzze[0], this.arrayPuzze[1]) >= 148) {
                    if (this.arrayPuzze[0].position.x > this.arrayPuzze[1].x) {
                        if (Math.abs(this.arrayPuzze[0].position.y - this.arrayPuzze[1].y) < 1.5) {
                            if (!this.flag01) {
                                this.flag01 = true;
                                this.arrayPuzze[0].getComponent(DragRotate_1.default).onDoneMerge = true;
                                this.arrayPuzze[1].getComponent(DragRotate_1.default).onDoneMerge = true;
                                this.scheduleOnce(function () {
                                    _this.arrayPuzze[0].runAction(cc.moveTo(0.5, cc.v2(80, -126)));
                                    _this.arrayPuzze[1].runAction(cc.moveTo(0.5, cc.v2(-77, -125)));
                                    _this.scheduleOnce(function () {
                                        _this.flag03 = true;
                                    }, 0.5);
                                }, 0.5);
                            }
                        }
                    }
                }
            }
            if (this.indexPuzze2 == 0 && this.indexPuzze3 == 0) {
                if (this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]) <= 158.5 && this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]) >= 148) {
                    if (this.arrayPuzze[3].position.x > this.arrayPuzze[2].x) {
                        if (Math.abs(this.arrayPuzze[2].position.y - this.arrayPuzze[3].y) < 1.5) {
                            if (!this.flag02) {
                                this.flag02 = true;
                                this.arrayPuzze[2].getComponent(DragRotate_1.default).onDoneMerge = true;
                                this.arrayPuzze[3].getComponent(DragRotate_1.default).onDoneMerge = true;
                                this.scheduleOnce(function () {
                                    _this.arrayPuzze[2].runAction(cc.moveTo(0.5, cc.v2(-76, 69.81)));
                                    _this.arrayPuzze[3].runAction(cc.moveTo(0.5, cc.v2(80, 69.81)));
                                    _this.scheduleOnce(function () {
                                        _this.flag04 = true;
                                    }, 0.5);
                                }, 0.5);
                            }
                        }
                    }
                }
            }
            if (this.flag03 && this.flag04) {
                this.endGame = true;
                this.scheduleOnce(function () {
                    _this.IEC_ENDCARD();
                }, 0.5);
            }
            if (this.firstTouch) {
                this.Guide_in.active = false;
            }
        }
        // cc.log("indexPuzze11: " + this.indexPuzze11);
        // cc.log("indexPuzze12: " + this.indexPuzze12);
        // cc.log("indexPuzze2: " + this.indexPuzze2);
        // cc.log("indexPuzze3: " + this.indexPuzze3);
    };
    // [0] [1] - distance 157 
    // [2] [3] - distance 157 
    // [0][1] [2][3] - 
    GameManager2.prototype.GetDistance2Point = function (node1, node2) {
        var Temp1x = node1.position.x;
        var Temp1y = node1.position.y;
        var Temp2x = node2.position.x;
        var Temp2y = node2.position.y;
        var distancebyNode = this.Distance(cc.v2(Temp1x, Temp1y), cc.v2(Temp2x, Temp2y));
        //cc.log(distancebyNode);
        return distancebyNode;
    };
    GameManager2.prototype.Distance = function (vec1, vec2) {
        var Distance = Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
        return Distance;
    };
    GameManager2.prototype.IEC_ENDCARD = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.soundManager.JokerVoice, false);
        this.VFX_Node.active = true;
        this.Guide_win.active = true;
        this.EventNetWork();
        this.endGame = true;
        Global_1.default.boolEndGame = true;
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.soundManager.BgSound, true);
            _this.PlayArea.active = false;
            _this.FakeArea.active = true;
        }, 2);
    };
    GameManager2.prototype.EventNetWork = function () {
        if (this.mindworks) {
            window.gameEnd && window.gameEnd();
        }
        if (this.ironsource) {
            window.NUC.trigger.endGame('win');
        }
        if (this.vungle) {
            parent.postMessage('complete', '*');
        }
    };
    var GameManager2_1;
    __decorate([
        property(SoundManager_1.default)
    ], GameManager2.prototype, "soundManager", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "VFX_Node", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "Guide_in", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "Guide_win", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "FakeArea", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "PlayArea", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager2.prototype, "arrayPuzze", void 0);
    GameManager2 = GameManager2_1 = __decorate([
        ccclass
    ], GameManager2);
    return GameManager2;
}(Singleton_1.default));
exports.default = GameManager2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFuYWdlclxcR2FtZU1hbmFnZXIyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxnREFBMkM7QUFDM0MsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUM1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUF1QjtJQTBDN0QsVUFBVTtJQUNWO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBNUNNLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUN6QyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDNUIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixXQUFXO1FBQ1gsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBTzFCLE9BQU87UUFFUCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFJekIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFJcEIsY0FBWSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUM7O0lBQ2xDLENBQUM7cUJBOUNnQixZQUFZO0lB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QUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNwQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQzs7SUE5SkQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztzREFDa0I7SUFPekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUFTMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1M7SUE5QlYsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlLaEM7SUFBRCxtQkFBQztDQWpLRCxBQWlLQyxDQWpLeUMsbUJBQVMsR0FpS2xEO2tCQWpLb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmFnUm90YXRlIGZyb20gXCIuLi8uLi9TeW1tZXRyaWNHYW1lUGxheS9TY3JpcHRzL0RyYWdSb3RhdGVcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQ29tbW9uL0Jhc2UvR2xvYmFsXCI7XHJcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL0NvbW1vbi9TaW5nbGV0b25cIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vQ29tbW9uL1NvdW5kTWFuYWdlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlcjIgZXh0ZW5kcyBTaW5nbGV0b248R2FtZU1hbmFnZXIyPiB7XHJcbiAgICBAcHJvcGVydHkoU291bmRNYW5hZ2VyKVxyXG4gICAgcHVibGljIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbDtcclxuICAgIGVuZEdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXJ0QW5jaG9yWDogbnVtYmVyID0gLTE5MDtcclxuICAgIGVuZEFuY2hvclg6IG51bWJlciA9IDE5MDtcclxuICAgIGxlbmd0aE9mU2xpZGVyOiBudW1iZXIgPSAwO1xyXG4gICAgZmlyc3RUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBWRlhfTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL1VJIENvbmZpZ1xyXG4gICAgaXNDYW5TdGFydEdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR3VpZGVfaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHdWlkZV93aW46IGNjLk5vZGUgPSBudWxsO1xyXG4vLyBTdGFnZSBpbmRleCBvZiBQdXp6ZSBub3c7XHJcbiAgICBpbmRleFB1enplMTE6IG51bWJlcjtcclxuICAgIGluZGV4UHV6emUxMjogbnVtYmVyO1xyXG4gICAgaW5kZXhQdXp6ZTI6IG51bWJlcjtcclxuICAgIGluZGV4UHV6emUzOiBudW1iZXI7XHJcblxyXG4gICAgLy8gQXJlYVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGYWtlQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBsYXlBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcnJheVB1enplOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBmbGFnMDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGZsYWcwMjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZsYWcwMzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZmxhZzA0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGlyb25zb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1pbmR3b3JrczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdnVuZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL015Q29uZmlnXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIEdhbWVNYW5hZ2VyMi5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWluZHdvcmtzKXtcclxuICAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxlbmd0aE9mU2xpZGVyID0gdGhpcy5lbmRBbmNob3JYIC0gdGhpcy5zdGFydEFuY2hvclg7XHJcbiAgICAgICAgdGhpcy5pc0NhblN0YXJ0R2FtZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5HZXREaXN0YW5jZTJQb2ludCh0aGlzLmFycmF5UHV6emVbMl0sIHRoaXMuYXJyYXlQdXp6ZVszXSk7XHJcbiAgICAgICAgdGhpcy5TdGFnZUNoZWNrQ29ycmVjdCgpO1xyXG4gICAgfVxyXG4gICAgU3RhZ2VDaGVja0NvcnJlY3QoKXtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuZW5kR2FtZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhQdXp6ZTExID09IDAgJiYgdGhpcy5pbmRleFB1enplMTIgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLkdldERpc3RhbmNlMlBvaW50KHRoaXMuYXJyYXlQdXp6ZVswXSwgdGhpcy5hcnJheVB1enplWzFdKSA8PSAxNTguNSAmJiB0aGlzLkdldERpc3RhbmNlMlBvaW50KHRoaXMuYXJyYXlQdXp6ZVswXSwgdGhpcy5hcnJheVB1enplWzFdKSA+PSAxNDggKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFycmF5UHV6emVbMF0ucG9zaXRpb24ueCA+IHRoaXMuYXJyYXlQdXp6ZVsxXS54KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5hcnJheVB1enplWzBdLnBvc2l0aW9uLnkgLSB0aGlzLmFycmF5UHV6emVbMV0ueSkgPCAxLjUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZmxhZzAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcwMSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVB1enplWzBdLmdldENvbXBvbmVudChEcmFnUm90YXRlKS5vbkRvbmVNZXJnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVB1enplWzFdLmdldENvbXBvbmVudChEcmFnUm90YXRlKS5vbkRvbmVNZXJnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVB1enplWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LCBjYy52Mig4MCwgLTEyNikpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlQdXp6ZVsxXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSwgY2MudjIoLTc3LCAtMTI1KSkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZzAzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleFB1enplMiA9PSAwICYmIHRoaXMuaW5kZXhQdXp6ZTMgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLkdldERpc3RhbmNlMlBvaW50KHRoaXMuYXJyYXlQdXp6ZVsyXSwgdGhpcy5hcnJheVB1enplWzNdKSA8PSAxNTguNSAmJiB0aGlzLkdldERpc3RhbmNlMlBvaW50KHRoaXMuYXJyYXlQdXp6ZVsyXSwgdGhpcy5hcnJheVB1enplWzNdKSA+PSAxNDgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJyYXlQdXp6ZVszXS5wb3NpdGlvbi54ID4gdGhpcy5hcnJheVB1enplWzJdLngpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihNYXRoLmFicyh0aGlzLmFycmF5UHV6emVbMl0ucG9zaXRpb24ueSAtIHRoaXMuYXJyYXlQdXp6ZVszXS55KSA8IDEuNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5mbGFnMDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZzAyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5UHV6emVbMl0uZ2V0Q29tcG9uZW50KERyYWdSb3RhdGUpLm9uRG9uZU1lcmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5UHV6emVbM10uZ2V0Q29tcG9uZW50KERyYWdSb3RhdGUpLm9uRG9uZU1lcmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5UHV6emVbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsIGNjLnYyKC03NiwgNjkuODEpKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5UHV6emVbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsIGNjLnYyKDgwLCA2OS44MSkpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcwNCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmZsYWcwMyAmJiB0aGlzLmZsYWcwNCApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JRUNfRU5EQ0FSRCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmZpcnN0VG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HdWlkZV9pbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coXCJpbmRleFB1enplMTE6IFwiICsgdGhpcy5pbmRleFB1enplMTEpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcImluZGV4UHV6emUxMjogXCIgKyB0aGlzLmluZGV4UHV6emUxMik7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiaW5kZXhQdXp6ZTI6IFwiICsgdGhpcy5pbmRleFB1enplMik7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiaW5kZXhQdXp6ZTM6IFwiICsgdGhpcy5pbmRleFB1enplMyk7XHJcbiAgICB9XHJcbiAgICAvLyBbMF0gWzFdIC0gZGlzdGFuY2UgMTU3IFxyXG4gICAgLy8gWzJdIFszXSAtIGRpc3RhbmNlIDE1NyBcclxuICAgIC8vIFswXVsxXSBbMl1bM10gLSBcclxuIFxyXG4gICAgR2V0RGlzdGFuY2UyUG9pbnQobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKXsgXHJcbiAgICAgICAgbGV0IFRlbXAxeCA9IG5vZGUxLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbGV0IFRlbXAxeSA9IG5vZGUxLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgbGV0IFRlbXAyeCA9IG5vZGUyLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbGV0IFRlbXAyeSA9IG5vZGUyLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlYnlOb2RlID0gdGhpcy5EaXN0YW5jZShjYy52MihUZW1wMXgsVGVtcDF5KSwgY2MudjIoVGVtcDJ4LCBUZW1wMnkpKTtcclxuICAgICAgICAvL2NjLmxvZyhkaXN0YW5jZWJ5Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlYnlOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIERpc3RhbmNlKHZlYzE6IGNjLlZlYzIsIHZlYzI6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgRGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codmVjMS54IC0gdmVjMi54LCAyKSArIE1hdGgucG93KHZlYzEueSAtIHZlYzIueSwgMikpO1xyXG4gICAgICAgIHJldHVybiBEaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBJRUNfRU5EQ0FSRCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZE1hbmFnZXIuSm9rZXJWb2ljZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuVkZYX05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkd1aWRlX3dpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuRXZlbnROZXRXb3JrKCk7XHJcbiAgICAgICAgdGhpcy5lbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICBHbG9iYWwuYm9vbEVuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZE1hbmFnZXIuQmdTb3VuZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUGxheUFyZWEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuRmFrZUFyZWEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAyKVxyXG5cclxuICAgIH1cclxuICAgIEV2ZW50TmV0V29yaygpIHtcclxuICAgICAgICBpZiAodGhpcy5taW5kd29ya3MpIHtcclxuICAgICAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXJvbnNvdXJjZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuTlVDLnRyaWdnZXIuZW5kR2FtZSgnd2luJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudnVuZ2xlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSgnY29tcGxldGUnLCAnKicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=