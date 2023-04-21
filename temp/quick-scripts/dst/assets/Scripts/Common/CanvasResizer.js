
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/CanvasResizer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24a43Hqj0dJErEdK1GTKjWq', 'CanvasResizer');
// Scripts/Common/CanvasResizer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var CanvasResizer = /** @class */ (function (_super) {
    __extends(CanvasResizer, _super);
    function CanvasResizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designResolution = new cc.Size(1280, 720);
        _this.lastWitdh = 0;
        _this.lastHeight = 0;
        return _this;
    }
    CanvasResizer.prototype.onLoad = function () {
        this.canvas = this.node.getComponent(cc.Canvas);
        this.updateCanvas();
    };
    CanvasResizer.prototype.update = function (dt) {
        this.updateCanvas();
    };
    CanvasResizer.prototype.updateCanvas = function () {
        var frameSize = cc.view.getFrameSize();
        // cc.log(frameSize );
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {
            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;
            if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                var newDesignSize = cc.size(this.designResolution.width, this.designResolution.width * (frameSize.height / frameSize.width));
                this.canvas.designResolution = newDesignSize;
                cc.log("update canvas size: " + newDesignSize);
            }
            else {
                var newDesignSize = cc.size(this.designResolution.height * (frameSize.width / frameSize.height), this.designResolution.height);
                this.canvas.designResolution = newDesignSize;
                cc.log("update canvas size: " + newDesignSize);
            }
        }
    };
    __decorate([
        property
    ], CanvasResizer.prototype, "designResolution", void 0);
    CanvasResizer = __decorate([
        ccclass,
        requireComponent(cc.Canvas)
    ], CanvasResizer);
    return CanvasResizer;
}(cc.Component));
exports.default = CanvasResizer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxDYW52YXNSZXNpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXVELEVBQXJELG9CQUFPLEVBQUUsc0JBQVEsRUFBRSxzQ0FBa0MsQ0FBQztBQUk5RDtJQUEyQyxpQ0FBWTtJQUZ2RDtRQUFBLHFFQXVDQztRQWxDRyxzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBK0IzQixDQUFDO0lBNUJHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBRTVFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqRyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdILElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO2dCQUM3QyxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDLENBQUM7YUFDbEQ7U0FDSjtJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFROzJEQUMwQztJQUhsQyxhQUFhO1FBRmpDLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO09BQ1AsYUFBYSxDQXFDakM7SUFBRCxvQkFBQztDQXJDRCxBQXFDQyxDQXJDMEMsRUFBRSxDQUFDLFNBQVMsR0FxQ3REO2tCQXJDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AcmVxdWlyZUNvbXBvbmVudChjYy5DYW52YXMpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc1Jlc2l6ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVzaWduUmVzb2x1dGlvbjogY2MuU2l6ZSA9IG5ldyBjYy5TaXplKDEyODAsIDcyMCk7XHJcblxyXG4gICAgbGFzdFdpdGRoOiBudW1iZXIgPSAwO1xyXG4gICAgbGFzdEhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIGNhbnZhczogY2MuQ2FudmFzO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhmcmFtZVNpemUgKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0V2l0ZGggIT09IGZyYW1lU2l6ZS53aWR0aCB8fCB0aGlzLmxhc3RIZWlnaHQgIT09IGZyYW1lU2l6ZS5oZWlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFdpdGRoID0gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RIZWlnaHQgPSBmcmFtZVNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgPiBmcmFtZVNpemUud2lkdGggLyBmcmFtZVNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGVzaWduU2l6ZSA9IGNjLnNpemUodGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoLCB0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGggKiAoZnJhbWVTaXplLmhlaWdodCAvIGZyYW1lU2l6ZS53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZGVzaWduUmVzb2x1dGlvbiA9IG5ld0Rlc2lnblNpemU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJ1cGRhdGUgY2FudmFzIHNpemU6IFwiICsgbmV3RGVzaWduU2l6ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGVzaWduU2l6ZSA9IGNjLnNpemUodGhpcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCAqIChmcmFtZVNpemUud2lkdGggLyBmcmFtZVNpemUuaGVpZ2h0KSwgdGhpcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uID0gbmV3RGVzaWduU2l6ZTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInVwZGF0ZSBjYW52YXMgc2l6ZTogXCIgKyBuZXdEZXNpZ25TaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=