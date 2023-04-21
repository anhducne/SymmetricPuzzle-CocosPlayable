"use strict";
cc._RF.push(module, '3cd7acL2HVPBLnWtaMLj7MI', 'ObjectMove');
// Scripts/Controller/ObjectMove.ts

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
var GlobalGamePlay_1 = require("../Common/Base/GlobalGamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMove = /** @class */ (function (_super) {
    __extends(ObjectMove, _super);
    function ObjectMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxCollider = null;
        _this.speedInit = 0;
        _this.img = null;
        _this.trail = null;
        _this.arraySprites = [];
        _this.arraySpritesHurtNotes = [];
        _this.effectPref = [];
        _this.isActive = false;
        _this.isHit = false;
        _this.isBonusScore = false;
        _this.currentSpeed = 0;
        _this.y = 0;
        _this.time = 0;
        _this.type = 0;
        _this.transformCollision = null;
        return _this;
    }
    ObjectMove.prototype.SetActive = function (type, scale, speed, isHit) {
        this.type = type;
        this.isHit = isHit;
        this.isBonusScore = (scale != 0 && this.isHit);
        if (isHit) {
            this.boxCollider.enabled = true;
            this.img.spriteFrame = this.arraySprites[type];
            this.trail.scaleX = 1;
            this.trail.scaleY = scale;
            this.y = -306 - (100 * scale);
        }
        else {
            this.boxCollider.enabled = false;
            this.img.spriteFrame = this.arraySpritesHurtNotes[type];
            //this.img = null;
            this.trail.scale = 0;
        }
        this.currentSpeed = this.speedInit * speed;
        this.isActive = true;
    };
    ObjectMove.prototype.update = function (dt) {
        this.node.y += this.currentSpeed * dt;
        if (this.node.y < -306 && this.isActive) {
            if (!this.isHit) {
                this.isActive = false;
                this.node.destroy();
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.EnemyAnimation(this.type);
            }
            else {
                if (this.node.y < -410) {
                    this.isActive = false;
                    this.isBonusScore = false;
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnMiss();
                    this.node.destroy();
                }
            }
        }
        if (this.isBonusScore && !this.isActive) {
            if (this.transformCollision.x > this.node.x + 30 || this.transformCollision.x < this.node.x - 30 || this.node.y < this.y) {
                this.isBonusScore = false;
                this.node.destroy();
                //Stop sound gun auto
            }
            else {
                this.time += dt;
                //Play sound gun auto
                if (this.time > 0.1) {
                    this.time = 0;
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(30);
                }
            }
        }
    };
    ObjectMove.prototype.onCollisionEnter = function (Other, mySelf) {
        if (this.isActive) {
            this.isActive = false;
            if (Other.node.group == "ObjectTarget") {
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.PlayerAnimation(this.type);
                if (this.node.y < Other.node.y) {
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(250);
                }
                else {
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(500);
                }
                //if (!this.isBonusScore) {
                //this.scheduleOnce(() => {
                this.node.destroy();
                //}, 0.1);
                //}
                //Play Sound Gun DE
                // cc.audioEngine.playEffect(GlobalGamePlay.Instance(GlobalGamePlay).gameplay.soundManager.soundDE, false);
                this.SpawnerEffectObject(this.type, mySelf.node);
            }
        }
    };
    ObjectMove.prototype.SpawnerEffectObject = function (type, pos) {
        var eff = cc.instantiate(this.effectPref[type]);
        eff.setParent(GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.effectParent);
        eff.setPosition(pos.x, pos.y - 20);
    };
    __decorate([
        property(cc.BoxCollider)
    ], ObjectMove.prototype, "boxCollider", void 0);
    __decorate([
        property(cc.Float)
    ], ObjectMove.prototype, "speedInit", void 0);
    __decorate([
        property(cc.Sprite)
    ], ObjectMove.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], ObjectMove.prototype, "trail", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ObjectMove.prototype, "arraySprites", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ObjectMove.prototype, "arraySpritesHurtNotes", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObjectMove.prototype, "effectPref", void 0);
    ObjectMove = __decorate([
        ccclass
    ], ObjectMove);
    return ObjectMove;
}(cc.Component));
exports.default = ObjectMove;

cc._RF.pop();