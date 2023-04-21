
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/CanvasTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11148qXbqhDWKPY+o1cTARf', 'CanvasTouch');
// Scripts/Common/CanvasTouch.ts

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
var Global_1 = require("./Base/Global");
var GlobalGamePlay_1 = require("./Base/GlobalGamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CanvasTouch = /** @class */ (function (_super) {
    __extends(CanvasTouch, _super);
    function CanvasTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidLink = "";
        _this.iosLink = "";
        _this.defaultLink = "";
        _this.isMouseDown = false;
        return _this;
    }
    CanvasTouch.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
    };
    CanvasTouch.prototype.TouchStart = function (event) {
        if (!Global_1.default.boolEndGame) {
            if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.firstTouch = true;
                this.isMouseDown = true;
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global_1.default.touchPos = mousePosition;
            }
        }
        else {
            this.openAdUrl();
        }
    };
    CanvasTouch.prototype.TouchMove = function (event) {
        if (this.isMouseDown) {
            if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global_1.default.touchPos = mousePosition;
            }
        }
    };
    CanvasTouch.prototype.TouchEnd = function (event) {
        if (GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.isCanStartGame) {
            this.isMouseDown = false;
            var mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
            Global_1.default.touchPos = mousePosition;
        }
    };
    CanvasTouch.prototype.openAdUrl = function () {
        var clickTag = '';
        window.androidLink = this.androidLink;
        window.iosLink = this.iosLink;
        window.defaultLink = this.defaultLink;
        if (window.openAdUrl) {
            window.openAdUrl();
        }
        else {
            window.open();
        }
    };
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "androidLink", void 0);
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "iosLink", void 0);
    __decorate([
        property(cc.String)
    ], CanvasTouch.prototype, "defaultLink", void 0);
    CanvasTouch = __decorate([
        ccclass
    ], CanvasTouch);
    return CanvasTouch;
}(cc.Component));
exports.default = CanvasTouch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxDYW52YXNUb3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsd0RBQW1EO0FBRTdDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUF5REM7UUF0REcsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUFpRGpDLENBQUM7SUFoRGEsMkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxnQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxnQkFBTSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLHdCQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2dCQUNqRSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxnQkFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7YUFDbkM7U0FDSjthQUNJO1lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksd0JBQWMsQ0FBQyxRQUFRLENBQUMsd0JBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2pFLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlELGdCQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQzthQUNuQztTQUNKO0lBQ0wsQ0FBQztJQUNELDhCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUQsZ0JBQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUNELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQXJERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0M7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDSztJQU5SLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3RC9CO0lBQUQsa0JBQUM7Q0F4REQsQUF3REMsQ0F4RHdDLEVBQUUsQ0FBQyxTQUFTLEdBd0RwRDtrQkF4RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuL0Jhc2UvR2xvYmFsXCI7XHJcbmltcG9ydCBHbG9iYWxHYW1lUGxheSBmcm9tIFwiLi9CYXNlL0dsb2JhbEdhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNUb3VjaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgYW5kcm9pZExpbms6IFN0cmluZyA9IFwiXCI7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgaW9zTGluazogU3RyaW5nID0gXCJcIjtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBkZWZhdWx0TGluazogU3RyaW5nID0gXCJcIjtcclxuICAgIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLlRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLlRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBUb3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFHbG9iYWwuYm9vbEVuZEdhbWUpIHtcclxuICAgICAgICAgICAgaWYgKEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5pc0NhblN0YXJ0R2FtZSkge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5LmZpcnN0VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW91c2VQb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG1vdXNlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLnRvdWNoUG9zID0gbW91c2VQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQWRVcmwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBUb3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bikge1xyXG4gICAgICAgICAgICBpZiAoR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5LmlzQ2FuU3RhcnRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW91c2VQb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG1vdXNlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLnRvdWNoUG9zID0gbW91c2VQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5pc0NhblN0YXJ0R2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgR2xvYmFsLnRvdWNoUG9zID0gbW91c2VQb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuQWRVcmwoKSB7XHJcbiAgICAgICAgdmFyIGNsaWNrVGFnID0gJyc7XHJcbiAgICAgICAgd2luZG93LmFuZHJvaWRMaW5rID0gdGhpcy5hbmRyb2lkTGluaztcclxuICAgICAgICB3aW5kb3cuaW9zTGluayA9IHRoaXMuaW9zTGluaztcclxuICAgICAgICB3aW5kb3cuZGVmYXVsdExpbmsgPSB0aGlzLmRlZmF1bHRMaW5rO1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbkFkVXJsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=