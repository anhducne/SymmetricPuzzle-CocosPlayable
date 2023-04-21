"use strict";
cc._RF.push(module, 'eef84kuWQVFqbf8OpphTyHp', 'Utility');
// Scripts/Common/Utility.ts

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
var Singleton_1 = require("./Singleton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utility = /** @class */ (function (_super) {
    __extends(Utility, _super);
    function Utility() {
        var _this = _super.call(this) || this;
        Utility_1._instance = _this;
        return _this;
    }
    Utility_1 = Utility;
    Utility.RandomRangeFloat = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
        //return Math.floor(Math.random() * (lower - lower)) + lower;
    };
    Utility.RandomRangeInteger = function (lower, upper) {
        return Math.round(Math.random() * (upper - lower) + lower);
    };
    Utility.Distance = function (vec1, vec2) {
        var Distance = Math.sqrt(Math.pow(vec1.x - vec2.x, 2) +
            Math.pow(vec1.y - vec2.y, 2));
        return Distance;
    };
    Utility.CaculatorDuration = function (vec1, vec2, speed) {
        var distance = this.Distance(vec1, vec2);
        var duration = distance / speed;
        return duration;
    };
    Utility.LookAt = function (startPos, endPos) {
        var direction = endPos.sub(startPos);
        var directionNormalized = direction.normalize();
        var radianAngle = Math.atan2(directionNormalized.y, directionNormalized.x);
        var angle = cc.misc.radiansToDegrees(radianAngle);
        //return {
        // direction: direction,
        // directionNormalized: directionNormalized,
        // radianAngle: radianAngle,
        //angle: angle
        //}
        return angle;
    };
    Utility.BetweenDegree = function (comVec, dirVec) {
        var angleDegree = Math.atan2(dirVec.y - comVec.y, dirVec.x - comVec.x) * 180 / Math.PI;
        return angleDegree - 90;
    };
    Utility.CaculatorDegree = function (Target) {
        var r = Math.atan2(Target.y, Target.x);
        var degree = r * 180 / (Math.PI);
        degree = 360 - degree + 90;
        return degree;
    };
    Utility.ConvertPosToCanvasByNode = function (objectParent, objectChildren) {
        var pos = cc.Canvas.instance.node.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(objectChildren.getPosition()));
        return pos;
    };
    Utility.ConvertPosToCanvasByVector = function (objectParent, vector) {
        var pos = cc.Canvas.instance.node.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(vector));
        return pos;
    };
    Utility.ConvertPosToHigherParentByNode = function (objectParentHigher, objectParent, objectChildren) {
        var pos = objectParentHigher.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(objectChildren.getPosition()));
        return pos;
    };
    Utility.ConvertPosToParentByVector = function (objectParentHigher, objectParent, vector) {
        var pos = objectParentHigher.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(vector));
        return pos;
    };
    var Utility_1;
    Utility = Utility_1 = __decorate([
        ccclass
    ], Utility);
    return Utility;
}(Singleton_1.default));
exports.default = Utility;

cc._RF.pop();