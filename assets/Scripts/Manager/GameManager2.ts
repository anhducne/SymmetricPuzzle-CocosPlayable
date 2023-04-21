import DragRotate from "../../SymmetricGamePlay/Scripts/DragRotate";
import Global from "../Common/Base/Global";
import Singleton from "../Common/Singleton";
import SoundManager from "../Common/SoundManager";
const { ccclass, property } = cc._decorator;
declare const window: any;
@ccclass
export default class GameManager2 extends Singleton<GameManager2> {
    @property(SoundManager)
    public soundManager: SoundManager = null;
    endGame: boolean = false;
    startAnchorX: number = -190;
    endAnchorX: number = 190;
    lengthOfSlider: number = 0;
    firstTouch: boolean = false;
    @property(cc.Node)
    VFX_Node: cc.Node = null;
    //UI Config
    isCanStartGame: boolean = false;
    @property(cc.Node)
    Guide_in: cc.Node = null;
    @property(cc.Node)
    Guide_win: cc.Node = null;
// Stage index of Puzze now;
    indexPuzze11: number;
    indexPuzze12: number;
    indexPuzze2: number;
    indexPuzze3: number;

    // Area
    @property(cc.Node)
    FakeArea: cc.Node = null;
    @property(cc.Node)
    PlayArea: cc.Node = null;


    @property(cc.Node)
    arrayPuzze: cc.Node[] = [];

    flag01: boolean = false;
    flag02: boolean = false;

    flag03: boolean = false;
    flag04: boolean = false;


    ironsource: boolean = false;
    mindworks: boolean = false;
    vungle: boolean = false;
    //MyConfig
    constructor() {
        super();
        GameManager2._instance = this;
    }
    start() {
        if (this.mindworks){
             window.gameReady && window.gameReady();
        }
        this.lengthOfSlider = this.endAnchorX - this.startAnchorX;
        this.isCanStartGame = true;
    }

    protected update(dt: number): void {
        // this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]);
        this.StageCheckCorrect();
    }
    StageCheckCorrect(){

        if(!this.endGame){
            if(this.indexPuzze11 == 0 && this.indexPuzze12 == 0){
                if(this.GetDistance2Point(this.arrayPuzze[0], this.arrayPuzze[1]) <= 158.5 && this.GetDistance2Point(this.arrayPuzze[0], this.arrayPuzze[1]) >= 148 ){
                    if(this.arrayPuzze[0].position.x > this.arrayPuzze[1].x){
                        if(Math.abs(this.arrayPuzze[0].position.y - this.arrayPuzze[1].y) < 1.5){
                            if(!this.flag01){
                                this.flag01 = true;
                                this.arrayPuzze[0].getComponent(DragRotate).onDoneMerge = true;
                                this.arrayPuzze[1].getComponent(DragRotate).onDoneMerge = true;
                                this.scheduleOnce(()=>{
                                    this.arrayPuzze[0].runAction(cc.moveTo(0.5, cc.v2(80, -126)) );
                                    this.arrayPuzze[1].runAction(cc.moveTo(0.5, cc.v2(-77, -125)) );
                                    this.scheduleOnce(()=>{
                                        this.flag03 = true;
                                    },0.5)
                                },0.5)
                            }
                        }
                    }
                }
            }
            if(this.indexPuzze2 == 0 && this.indexPuzze3 == 0){
                if(this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]) <= 158.5 && this.GetDistance2Point(this.arrayPuzze[2], this.arrayPuzze[3]) >= 148){
                    if(this.arrayPuzze[3].position.x > this.arrayPuzze[2].x){
                        if(Math.abs(this.arrayPuzze[2].position.y - this.arrayPuzze[3].y) < 1.5){
                            if(!this.flag02){
                                this.flag02 = true;
                                this.arrayPuzze[2].getComponent(DragRotate).onDoneMerge = true;
                                this.arrayPuzze[3].getComponent(DragRotate).onDoneMerge = true;
                                this.scheduleOnce(()=>{
                                    this.arrayPuzze[2].runAction(cc.moveTo(0.5, cc.v2(-76, 69.81)) );
                                    this.arrayPuzze[3].runAction(cc.moveTo(0.5, cc.v2(80, 69.81)) );
                                    this.scheduleOnce(()=>{
                                        this.flag04 = true;
                                    },0.5)
                                },0.5)
                            } 
                        }
                    }
                }
            }
            if(this.flag03 && this.flag04 ){
                this.endGame = true;
                this.scheduleOnce(()=>{
                    this.IEC_ENDCARD();
                }, 0.5);
            }
            if(this.firstTouch){
                this.Guide_in.active = false;
            }
        }
        // cc.log("indexPuzze11: " + this.indexPuzze11);
        // cc.log("indexPuzze12: " + this.indexPuzze12);
        // cc.log("indexPuzze2: " + this.indexPuzze2);
        // cc.log("indexPuzze3: " + this.indexPuzze3);
    }
    // [0] [1] - distance 157 
    // [2] [3] - distance 157 
    // [0][1] [2][3] - 
 
    GetDistance2Point(node1: cc.Node, node2: cc.Node){ 
        let Temp1x = node1.position.x;
        let Temp1y = node1.position.y;
        let Temp2x = node2.position.x;
        let Temp2y = node2.position.y;
        let distancebyNode = this.Distance(cc.v2(Temp1x,Temp1y), cc.v2(Temp2x, Temp2y));
        //cc.log(distancebyNode);
        return distancebyNode;
    }

    Distance(vec1: cc.Vec2, vec2: cc.Vec2) {
        let Distance = Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
        return Distance;
    }

    IEC_ENDCARD(){
        cc.audioEngine.playEffect(this.soundManager.JokerVoice, false);
        this.VFX_Node.active = true;
        this.Guide_win.active = true;
        this.EventNetWork();
        this.endGame = true;
        Global.boolEndGame = true;
        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.soundManager.BgSound, true);
            this.PlayArea.active = false;
            this.FakeArea.active = true;
        }, 2)

    }
    EventNetWork() {
        if (this.mindworks) {
            window.gameEnd && window.gameEnd();
        }
        if (this.ironsource) {
            window.NUC.trigger.endGame('win')
        }
        if (this.vungle) {
            parent.postMessage('complete', '*');
        }
    }
}
