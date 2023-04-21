"use strict";
cc._RF.push(module, '6bf1dBWiqtF9YIlV2JETefC', 'SoundManager');
// Scripts/Common/SoundManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BgSound = null;
        // @property({
        //     type: cc.AudioClip
        // })
        // VoiceSound: cc.AudioClip = null;
        //
        // @property({
        //     type: cc.AudioClip
        // })
        // round1: cc.AudioClip = null;
        // @property({
        //     type: cc.AudioClip
        // })
        // round2: cc.AudioClip = null;
        // @property({
        //     type: cc.AudioClip
        // })
        // soundDE: cc.AudioClip = null;
        // @property({
        //     type: cc.AudioClip
        // })
        // soundGunAuto: cc.AudioClip = null;
        _this.JokerVoice = null;
        _this.TouchSound = null;
        return _this;
    }
    SoundManager.prototype.PlaySoundGame = function () {
        cc.audioEngine.playEffect(this.BgSound, false);
        // cc.audioEngine.playEffect(this.VoiceSound, false);
    };
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], SoundManager.prototype, "BgSound", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], SoundManager.prototype, "JokerVoice", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], SoundManager.prototype, "TouchSound", void 0);
    SoundManager = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

cc._RF.pop();