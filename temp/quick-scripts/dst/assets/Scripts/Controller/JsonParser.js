
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/JsonParser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cc6bfq9ilCA746Kt1jvDkH', 'JsonParser');
// Scripts/Controller/JsonParser.ts

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
var JsonParser = /** @class */ (function (_super) {
    __extends(JsonParser, _super);
    function JsonParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonParser.parse = function (resourcePath) {
        var ClassToParse;
        cc.loader.loadRes(resourcePath, function (err, res) {
            //console.log("Load Json");
            ClassToParse = res.json;
        });
        return ClassToParse;
    };
    JsonParser = __decorate([
        ccclass
    ], JsonParser);
    return JsonParser;
}(cc.Component));
exports.default = JsonParser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcSnNvblBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQVNBLENBQUM7SUFSVSxnQkFBSyxHQUFaLFVBQWdCLFlBQW9CO1FBQ2hDLElBQUksWUFBZSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3JDLDJCQUEyQjtZQUMzQixZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFSZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVM5QjtJQUFELGlCQUFDO0NBVEQsQUFTQyxDQVR1QyxFQUFFLENBQUMsU0FBUyxHQVNuRDtrQkFUb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uUGFyc2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwYXJzZTxUPihyZXNvdXJjZVBhdGg6IHN0cmluZyk6IFQge1xyXG4gICAgICAgIGxldCBDbGFzc1RvUGFyc2U6IFQ7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocmVzb3VyY2VQYXRoLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvYWQgSnNvblwiKTtcclxuICAgICAgICAgICAgQ2xhc3NUb1BhcnNlID0gcmVzLmpzb247XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENsYXNzVG9QYXJzZTtcclxuICAgIH1cclxufVxyXG4iXX0=