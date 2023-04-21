"use strict";
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