const {ccclass, property} = cc._decorator;

@ccclass
export default class PlatformBtn extends cc.Component {
    @property(cc.SpriteFrame)
    androidSprites: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    iosSprites: cc.SpriteFrame = null;
    start()
    {
        if(cc.sys.os == cc.sys.OS_ANDROID)
            this.getComponent(cc.Sprite).spriteFrame = this.androidSprites;
        else if(cc.sys.os == cc.sys.OS_IOS)
            this.getComponent(cc.Sprite).spriteFrame = this.iosSprites;
    }
    
}
