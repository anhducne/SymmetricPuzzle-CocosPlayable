
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Base/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a89b+amfNAl6tKkXESWcSg', 'Global');
// Scripts/Common/Base/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = {
    touchPos: null,
    boolEndGame: false,
};
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFJLE1BQU0sR0FBVztJQUNqQixRQUFRLEVBQUUsSUFBSTtJQUNkLFdBQVcsRUFBRSxLQUFLO0NBQ3JCLENBQUM7QUFDRixrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgR2xvYmFsIHtcclxuICAgIHRvdWNoUG9zOiBjYy5WZWMyLFxyXG4gICAgYm9vbEVuZEdhbWU6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmxldCBHbG9iYWw6IEdsb2JhbCA9IHtcclxuICAgIHRvdWNoUG9zOiBudWxsLFxyXG4gICAgYm9vbEVuZEdhbWU6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWw7Il19