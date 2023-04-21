
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e85eDq/b5IMKv3xCkYO/e3', 'Singleton');
// Scripts/Common/Singleton.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function (_super) {
    __extends(Singleton, _super);
    function Singleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Singleton.Instance = function (c) {
        if (this._instance == null) {
            this._instance = new c();
        }
        return this._instance;
    };
    Singleton._instance = null;
    return Singleton;
}(cc.Component));
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxTaW5nbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBMEMsNkJBQVk7SUFBdEQ7O0lBUUEsQ0FBQztJQVBpQixrQkFBUSxHQUF0QixVQUEwQixDQUFlO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDYSxtQkFBUyxHQUFHLElBQUksQ0FBQztJQUNuQyxnQkFBQztDQVJELEFBUUMsQ0FSeUMsRUFBRSxDQUFDLFNBQVMsR0FRckQ7a0JBUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uPFQ+IGV4dGVuZHMgY2MuQ29tcG9uZW50e1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTxUPihjOiB7bmV3KCk6IFQ7IH0pIDogVHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2UgPSBudWxsO1xyXG59XHJcbiJdfQ==