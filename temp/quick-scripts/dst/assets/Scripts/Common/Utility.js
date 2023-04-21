
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFrQjtJQUNuRDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLFNBQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDOztJQUM3QixDQUFDO2dCQUpnQixPQUFPO0lBS2pCLHdCQUFnQixHQUF2QixVQUF3QixLQUFhLEVBQUUsS0FBYTtRQUNoRCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0MsNkRBQTZEO0lBQ2pFLENBQUM7SUFDTSwwQkFBa0IsR0FBekIsVUFBMEIsS0FBYSxFQUFFLEtBQWE7UUFDbEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ00sZ0JBQVEsR0FBZixVQUFnQixJQUFhLEVBQUUsSUFBYTtRQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTSx5QkFBaUIsR0FBeEIsVUFBeUIsSUFBYSxFQUFFLElBQWEsRUFBRSxLQUFhO1FBQ2hFLElB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QUNhLE9BQU8sQ0E4RDNCO0lBQUQsY0FBQztDQTlERCxBQThEQyxDQTlEb0MsbUJBQVMsR0E4RDdDO2tCQTlEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4vU2luZ2xldG9uXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0eSBleHRlbmRzIFNpbmdsZXRvbjxVdGlsaXR5PiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFV0aWxpdHkuX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBSYW5kb21SYW5nZUZsb2F0KGxvd2VyOiBudW1iZXIsIHVwcGVyOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSArIGxvd2VyO1xyXG4gICAgICAgIC8vcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsb3dlciAtIGxvd2VyKSkgKyBsb3dlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBSYW5kb21SYW5nZUludGVnZXIobG93ZXI6IG51bWJlciwgdXBwZXI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikgKyBsb3dlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgRGlzdGFuY2UodmVjMTogY2MuVmVjMiwgdmVjMjogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCBEaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh2ZWMxLnggLSB2ZWMyLngsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3codmVjMS55IC0gdmVjMi55LCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIERpc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIENhY3VsYXRvckR1cmF0aW9uKHZlYzE6IGNjLlZlYzIsIHZlYzI6IGNjLlZlYzIsIHNwZWVkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLkRpc3RhbmNlKHZlYzEsIHZlYzIpO1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XHJcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBMb29rQXQoc3RhcnRQb3M6IGNjLlZlYzMsIGVuZFBvczogY2MuVmVjMykge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbk5vcm1hbGl6ZWQgPSBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgcmFkaWFuQW5nbGUgPSBNYXRoLmF0YW4yKGRpcmVjdGlvbk5vcm1hbGl6ZWQueSwgZGlyZWN0aW9uTm9ybWFsaXplZC54KTtcclxuICAgICAgICBjb25zdCBhbmdsZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW5BbmdsZSk7XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAvLyBkaXJlY3Rpb25Ob3JtYWxpemVkOiBkaXJlY3Rpb25Ob3JtYWxpemVkLFxyXG4gICAgICAgIC8vIHJhZGlhbkFuZ2xlOiByYWRpYW5BbmdsZSxcclxuICAgICAgICAvL2FuZ2xlOiBhbmdsZVxyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBCZXR3ZWVuRGVncmVlKGNvbVZlYzogY2MuVmVjMiwgZGlyVmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlRGVncmVlID0gTWF0aC5hdGFuMihkaXJWZWMueSAtIGNvbVZlYy55LCBkaXJWZWMueCAtIGNvbVZlYy54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlRGVncmVlIC0gOTA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgQ2FjdWxhdG9yRGVncmVlKFRhcmdldDogY2MuVmVjMikge1xyXG4gICAgICAgIHZhciByID0gTWF0aC5hdGFuMihUYXJnZXQueSwgVGFyZ2V0LngpO1xyXG4gICAgICAgIHZhciBkZWdyZWUgPSByICogMTgwIC8gKE1hdGguUEkpO1xyXG4gICAgICAgIGRlZ3JlZSA9IDM2MCAtIGRlZ3JlZSArIDkwO1xyXG4gICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgQ29udmVydFBvc1RvQ2FudmFzQnlOb2RlKG9iamVjdFBhcmVudDogY2MuTm9kZSwgb2JqZWN0Q2hpbGRyZW46IGNjLk5vZGUpIHtcclxuICAgICAgICB2YXIgcG9zID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIob2JqZWN0UGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihvYmplY3RDaGlsZHJlbi5nZXRQb3NpdGlvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIHBvcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBDb252ZXJ0UG9zVG9DYW52YXNCeVZlY3RvcihvYmplY3RQYXJlbnQ6IGNjLk5vZGUsIHZlY3RvcjogY2MuVmVjMikge1xyXG4gICAgICAgIHZhciBwb3MgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvYmplY3RQYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHZlY3RvcikpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgQ29udmVydFBvc1RvSGlnaGVyUGFyZW50QnlOb2RlKG9iamVjdFBhcmVudEhpZ2hlcjogY2MuTm9kZSwgb2JqZWN0UGFyZW50OiBjYy5Ob2RlLCBvYmplY3RDaGlsZHJlbjogY2MuTm9kZSkge1xyXG4gICAgICAgIHZhciBwb3MgPSBvYmplY3RQYXJlbnRIaWdoZXIuY29udmVydFRvTm9kZVNwYWNlQVIob2JqZWN0UGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihvYmplY3RDaGlsZHJlbi5nZXRQb3NpdGlvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIHBvcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBDb252ZXJ0UG9zVG9QYXJlbnRCeVZlY3RvcihvYmplY3RQYXJlbnRIaWdoZXI6IGNjLk5vZGUsIG9iamVjdFBhcmVudDogY2MuTm9kZSwgdmVjdG9yOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IG9iamVjdFBhcmVudEhpZ2hlci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvYmplY3RQYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHZlY3RvcikpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcbn1cclxuIl19