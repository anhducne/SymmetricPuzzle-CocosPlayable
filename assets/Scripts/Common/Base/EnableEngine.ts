const { ccclass, property } = cc._decorator;

@ccclass
export default class EnableEngine extends cc.Component {

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        //cc.director.getPhysics3DManager().enabled = true;
        //cc.director.getPhysics3DManager().gravity = cc.v3(0,0,-1);
    }

}