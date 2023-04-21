"use strict";
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