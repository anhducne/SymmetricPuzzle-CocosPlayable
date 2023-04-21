import Global from "./Base/Global";
import GlobalGamePlay from "./Base/GlobalGamePlay";

const { ccclass, property } = cc._decorator;
declare const window: any;
@ccclass
export default class CanvasTouch extends cc.Component {
    @property(cc.String)
    androidLink: String = "";
    @property(cc.String)
    iosLink: String = "";
    @property(cc.String)
    defaultLink: String = "";
    isMouseDown: boolean = false;
    protected start(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
    }
    TouchStart(event) {
        if (!Global.boolEndGame) {
            if (GlobalGamePlay.Instance(GlobalGamePlay).gameplay.isCanStartGame) {
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.firstTouch = true;
                this.isMouseDown = true;
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global.touchPos = mousePosition;
            }
        }
        else {
            this.openAdUrl();
        }
    }
    TouchMove(event) {
        if (this.isMouseDown) {
            if (GlobalGamePlay.Instance(GlobalGamePlay).gameplay.isCanStartGame) {
                var mousePosition = event.getLocation();
                mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
                Global.touchPos = mousePosition;
            }
        }
    }
    TouchEnd(event) {
        if (GlobalGamePlay.Instance(GlobalGamePlay).gameplay.isCanStartGame) {
            this.isMouseDown = false;
            var mousePosition = event.getLocation();
            mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
            Global.touchPos = mousePosition;
        }
    }
    openAdUrl() {
        var clickTag = '';
        window.androidLink = this.androidLink;
        window.iosLink = this.iosLink;
        window.defaultLink = this.defaultLink;
        if (window.openAdUrl) {
            window.openAdUrl();
        } else {
            window.open();
        }
    }
}
