
import GlobalGamePlay from "../../Scripts/Common/Base/GlobalGamePlay";
import Global from "../../Scripts/Common/Base/Global";
import SoundManager from "../../Scripts/Common/SoundManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DragRotate extends cc.Component {

    @property(cc.Node)
    nodeTarget: cc.Node = null;
    
    touchPos: cc.Vec2 = null;
    boolOnTouch: boolean = false;
    isControllable: boolean = false;
    @property(cc.Float)
    puzzeStage: number ;

    isTouchMove: boolean = false;

    onDoneMerge: boolean = false;

    start () {
        this.touchPos = this.node.getPosition();
        this.ActiveEvent(true);
        this.isControllable = true;
        this.ScanAngleNode();
        this.onDoneMerge = false;
    }

    protected update(dt: number): void {
        if (this.boolOnTouch) {
            if(!this.onDoneMerge){
                this.DragPuzze();
            }
        }

    }

    ActiveEvent(bool: boolean){
        if(bool){
            this.node.on(cc.Node.EventType.TOUCH_START, this.ontouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ontouchMove, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.ontouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ontouchEnd, this);
        }else{
            this.node.off(cc.Node.EventType.TOUCH_START, this.ontouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.ontouchMove, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.ontouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.ontouchEnd, this);
        }
    }

    ontouchStart(event: cc.Touch){
        if(this.isControllable){
            this.boolOnTouch = true;
            // cc.log("On 1 click !");   
            // if(!this.onDoneMerge){
            //     this.RotateObject45();
            // }
        }
    }

    ontouchMove(event: cc.Touch){
        if(this.isControllable){
            this.boolOnTouch = true;
            this.isTouchMove = true;
            let delta = event.getDelta();
            this.touchPos.x += delta.x;
            this.touchPos.y += delta.y;
        }
    }

    ontouchEnd(event: cc.Touch){
        if(this.isControllable){
            if(!this.onDoneMerge){
                if(!this.isTouchMove){
                    this.RotateObject45();
                }
            }
            this.isTouchMove = false;
            let a = Math.sqrt((this.node.x - this.nodeTarget.x) * (this.node.x - this.nodeTarget.x) +
                (this.node.y - this.nodeTarget.y) * (this.node.y - this.nodeTarget.y));
        }
    }

    

    RotateObject45(){
    // Plus rotate angle 
        this.node.angle -= 45;
        if(this.node.angle == -360){
            this.node.angle = 0;
        }
        cc.audioEngine.playEffect(GlobalGamePlay.Instance(GlobalGamePlay).gameplay.soundManager.TouchSound, false);
        //cc.log("Angle now: " + this.node.angle);
        this.ScanAngleNode();
    }
    

    ScanAngleNode(){
        let tempIndex;
        if(Math.abs(this.node.angle) === 0){
            tempIndex = 0;
        }else if(Math.abs(this.node.angle) === 45){
            tempIndex = 1;
        }else if(Math.abs(this.node.angle) === 90){
            tempIndex = 2;
        }else if(Math.abs(this.node.angle) === 135){
            tempIndex = 3;
        }else if(Math.abs(this.node.angle) === 180){
            tempIndex = 4;
        }else if(Math.abs(this.node.angle) === 225){
            tempIndex = 5;
        }else if(Math.abs(this.node.angle) === 270){
            tempIndex = 6;
        }else if(Math.abs(this.node.angle) === 315){
            tempIndex = 7;
        }else if(Math.abs(this.node.angle) === 360){
            tempIndex = 8;
        }

        //cc.log("Index temp now: " + tempIndex);

        switch(this.puzzeStage){
            case 1: 
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.indexPuzze11 = tempIndex;
                break;
            case 2:
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.indexPuzze12 = tempIndex;
                break;
            case 3:
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.indexPuzze2 = tempIndex;
                break;
            case 4: 
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.indexPuzze3 = tempIndex;
                break;
            default:
                break;
        }

        //cc.log("PuzzeStageNow: " + this.puzzeStage);
    }

    DragPuzze() {
        
        if(this.touchPos.x >= -300 && this.touchPos.x <= 300){
            this.node.x = cc.misc.lerp(this.node.x, this.touchPos.x, 0.7);
        }
        //cc.log("x pos: " + this.node.x);
        if(this.touchPos.y <= 500 && this.touchPos.y >= -500){
            this.node.y = cc.misc.lerp(this.node.y, this.touchPos.y, 0.7)
        }
        //cc.log("y pos: " + this.node.y);
        // this.node.x = cc.misc.lerp(this.node.x, this.touchPos.x, 0.7);
        // this.node.y = cc.misc.lerp(this.node.y, this.touchPos.y, 0.7)
    }

}


