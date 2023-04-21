
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxTb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQTBDQztRQXJDRyxhQUFPLEdBQWlCLElBQUksQ0FBQztRQUM3QixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLEtBQUs7UUFDTCxtQ0FBbUM7UUFDbkMsRUFBRTtRQUNGLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsS0FBSztRQUNMLCtCQUErQjtRQUMvQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLEtBQUs7UUFDTCwrQkFBK0I7UUFDL0IsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixLQUFLO1FBQ0wsZ0NBQWdDO1FBQ2hDLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsS0FBSztRQUNMLHFDQUFxQztRQUlyQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFJaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQVFwQyxDQUFDO0lBTEcsb0NBQWEsR0FBYjtRQUVJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQscURBQXFEO0lBQ3hELENBQUM7SUFwQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQztpREFDMkI7SUF5QjdCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTO1NBQ3JCLENBQUM7b0RBQzhCO0lBSWhDO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTO1NBQ3JCLENBQUM7b0RBQzhCO0lBakNmLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F5Q2hDO0lBQUQsbUJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBeUNyRDtrQkF6Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuL0Jhc2UvR2xvYmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICB9KVxyXG4gICAgQmdTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7XHJcbiAgICAvLyAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gVm9pY2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vXHJcbiAgICAvLyBAcHJvcGVydHkoe1xyXG4gICAgLy8gICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgLy8gfSlcclxuICAgIC8vIHJvdW5kMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eSh7XHJcbiAgICAvLyAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gcm91bmQyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHtcclxuICAgIC8vICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgIC8vIH0pXHJcbiAgICAvLyBzb3VuZERFOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KHtcclxuICAgIC8vICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgIC8vIH0pXHJcbiAgICAvLyBzb3VuZEd1bkF1dG86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgfSlcclxuICAgIEpva2VyVm9pY2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgfSlcclxuICAgIFRvdWNoU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cclxuICAgIFBsYXlTb3VuZEdhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5CZ1NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuVm9pY2VTb3VuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==