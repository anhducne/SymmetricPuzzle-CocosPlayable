
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/EnumDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '713acjawzRF0KxYHsg44OT4', 'EnumDefine');
// Scripts/Common/EnumDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BulletType;
(function (BulletType) {
    BulletType[BulletType["B1"] = 0] = "B1";
    BulletType[BulletType["B2"] = 1] = "B2";
    BulletType[BulletType["B3"] = 2] = "B3";
    BulletType[BulletType["B4"] = 3] = "B4";
    BulletType[BulletType["B5"] = 4] = "B5";
    BulletType[BulletType["BEnemy"] = 5] = "BEnemy";
    BulletType[BulletType["BBossGP2_1"] = 6] = "BBossGP2_1";
    BulletType[BulletType["BBossGP2_2"] = 7] = "BBossGP2_2";
    BulletType[BulletType["B6"] = 8] = "B6";
    BulletType[BulletType["B7"] = 9] = "B7";
    BulletType[BulletType["B8"] = 10] = "B8";
    BulletType[BulletType["B9"] = 11] = "B9";
    BulletType[BulletType["BLaser"] = 12] = "BLaser";
    BulletType[BulletType["BLaser2"] = 13] = "BLaser2";
    BulletType[BulletType["B12"] = 14] = "B12";
    BulletType[BulletType["B13"] = 15] = "B13";
    BulletType[BulletType["B14"] = 16] = "B14";
    BulletType[BulletType["B15"] = 17] = "B15";
    BulletType[BulletType["B16"] = 18] = "B16";
    BulletType[BulletType["BBossGP3_1"] = 19] = "BBossGP3_1";
    BulletType[BulletType["BBossGP3_2"] = 20] = "BBossGP3_2";
})(BulletType = exports.BulletType || (exports.BulletType = {}));
var ShipType;
(function (ShipType) {
    ShipType[ShipType["LeftShip"] = 0] = "LeftShip";
    ShipType[ShipType["RightShip"] = 1] = "RightShip";
    ShipType[ShipType["S1"] = 2] = "S1";
    ShipType[ShipType["S2"] = 3] = "S2";
    ShipType[ShipType["S3"] = 4] = "S3";
    ShipType[ShipType["S4"] = 5] = "S4";
    ShipType[ShipType["S5"] = 6] = "S5";
})(ShipType = exports.ShipType || (exports.ShipType = {}));
var GameStateType;
(function (GameStateType) {
    GameStateType[GameStateType["INIT"] = 0] = "INIT";
    GameStateType[GameStateType["READY"] = 1] = "READY";
    GameStateType[GameStateType["PLAYING"] = 2] = "PLAYING";
    GameStateType[GameStateType["ENDGAME"] = 3] = "ENDGAME";
})(GameStateType = exports.GameStateType || (exports.GameStateType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxFbnVtRGVmaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxVQXVCWDtBQXZCRCxXQUFZLFVBQVU7SUFFbEIsdUNBQU0sQ0FBQTtJQUNOLHVDQUFNLENBQUE7SUFDTix1Q0FBTSxDQUFBO0lBQ04sdUNBQU0sQ0FBQTtJQUNOLHVDQUFNLENBQUE7SUFDTiwrQ0FBVSxDQUFBO0lBQ1YsdURBQWMsQ0FBQTtJQUNkLHVEQUFjLENBQUE7SUFDZCx1Q0FBTSxDQUFBO0lBQ04sdUNBQU0sQ0FBQTtJQUNOLHdDQUFPLENBQUE7SUFDUCx3Q0FBTyxDQUFBO0lBQ1AsZ0RBQVcsQ0FBQTtJQUNYLGtEQUFZLENBQUE7SUFDWiwwQ0FBUSxDQUFBO0lBQ1IsMENBQVEsQ0FBQTtJQUNSLDBDQUFRLENBQUE7SUFDUiwwQ0FBUSxDQUFBO0lBQ1IsMENBQVEsQ0FBQTtJQUNSLHdEQUFlLENBQUE7SUFDZix3REFBZSxDQUFBO0FBQ25CLENBQUMsRUF2QlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUF1QnJCO0FBRUQsSUFBWSxRQVNYO0FBVEQsV0FBWSxRQUFRO0lBRWpCLCtDQUFZLENBQUE7SUFDWixpREFBYSxDQUFBO0lBQ2IsbUNBQU0sQ0FBQTtJQUNOLG1DQUFNLENBQUE7SUFDTixtQ0FBTSxDQUFBO0lBQ04sbUNBQU0sQ0FBQTtJQUNOLG1DQUFNLENBQUE7QUFDVCxDQUFDLEVBVFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFTbkI7QUFDRCxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFFckIsaURBQVEsQ0FBQTtJQUNSLG1EQUFTLENBQUE7SUFDVCx1REFBVyxDQUFBO0lBQ1gsdURBQVcsQ0FBQTtBQUNmLENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEJ1bGxldFR5cGVcclxue1xyXG4gICAgQjEgPSAwLFxyXG4gICAgQjIgPSAxLFxyXG4gICAgQjMgPSAyLFxyXG4gICAgQjQgPSAzLFxyXG4gICAgQjUgPSA0LFxyXG4gICAgQkVuZW15ID0gNSxcclxuICAgIEJCb3NzR1AyXzEgPSA2LFxyXG4gICAgQkJvc3NHUDJfMiA9IDcsXHJcbiAgICBCNiA9IDgsXHJcbiAgICBCNyA9IDksXHJcbiAgICBCOCA9IDEwLFxyXG4gICAgQjkgPSAxMSxcclxuICAgIEJMYXNlciA9IDEyLFxyXG4gICAgQkxhc2VyMiA9IDEzLFxyXG4gICAgQjEyID0gMTQsXHJcbiAgICBCMTMgPSAxNSwgXHJcbiAgICBCMTQgPSAxNixcclxuICAgIEIxNSA9IDE3LFxyXG4gICAgQjE2ID0gMTgsXHJcbiAgICBCQm9zc0dQM18xID0gMTksXHJcbiAgICBCQm9zc0dQM18yID0gMjAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNoaXBUeXBlXHJcbntcclxuICAgTGVmdFNoaXAgPSAwLFxyXG4gICBSaWdodFNoaXAgPSAxLFxyXG4gICBTMSA9IDIsXHJcbiAgIFMyID0gMyxcclxuICAgUzMgPSA0LFxyXG4gICBTNCA9IDUsXHJcbiAgIFM1ID0gNixcclxufVxyXG5leHBvcnQgZW51bSBHYW1lU3RhdGVUeXBlXHJcbntcclxuICAgIElOSVQgPSAwLFxyXG4gICAgUkVBRFkgPSAxLFxyXG4gICAgUExBWUlORyA9IDIsXHJcbiAgICBFTkRHQU1FID0gMyxcclxufVxyXG4iXX0=