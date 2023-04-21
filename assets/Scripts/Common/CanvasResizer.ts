const { ccclass, property, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.Canvas)
export default class CanvasResizer extends cc.Component {

    @property
    designResolution: cc.Size = new cc.Size(1280, 720);

    lastWitdh: number = 0;
    lastHeight: number = 0;
    canvas: cc.Canvas;

    onLoad() {
        this.canvas = this.node.getComponent(cc.Canvas);
        this.updateCanvas();
    }

    update(dt) {
        this.updateCanvas();
    }

    updateCanvas() {
        var frameSize = cc.view.getFrameSize();
        // cc.log(frameSize );
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {

            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;

            if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                var newDesignSize = cc.size(this.designResolution.width, this.designResolution.width * (frameSize.height / frameSize.width));
                this.canvas.designResolution = newDesignSize;
                cc.log("update canvas size: " + newDesignSize);
            } else {
                var newDesignSize = cc.size(this.designResolution.height * (frameSize.width / frameSize.height), this.designResolution.height);
                this.canvas.designResolution = newDesignSize;
                cc.log("update canvas size: " + newDesignSize);
            }
        }
    }
}
