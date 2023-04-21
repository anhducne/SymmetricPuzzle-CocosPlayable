const { ccclass, property } = cc._decorator;

@ccclass
export default class DestroyVFX extends cc.Component {
    @property(cc.Float)
    timming: number = 0.3;
    start() {
        this.scheduleOnce(() => {
            this.node.destroy();
        }, this.timming);
    }
}
