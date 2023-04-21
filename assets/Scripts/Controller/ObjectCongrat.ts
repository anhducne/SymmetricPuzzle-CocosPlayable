const { ccclass, property } = cc._decorator;

@ccclass
export default class ObjectCongrat extends cc.Component {
    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(cc.SpriteFrame)
    arraySprites: cc.SpriteFrame[] = [];
    SetUp(state: number) {
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        this.img.spriteFrame = this.arraySprites[state];
        this.node.active = true;
        this.node.scale = 1;
        this.node.opacity = 0;
        let action = cc.scaleTo(0.05, 1);
        let action2 = cc.fadeIn(0.2);
        let action3 = cc.fadeOut(0.4);
        this.node.runAction(action);
        this.node.runAction(action2);
        this.scheduleOnce(() => {
            this.node.runAction(action3);
        }, 0.4);
    }
}
