import Global from "./Base/Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundManager extends cc.Component {
    @property({
        type: cc.AudioClip
    })
    BgSound: cc.AudioClip = null;
    // @property({
    //     type: cc.AudioClip
    // })
    // VoiceSound: cc.AudioClip = null;
    //
    // @property({
    //     type: cc.AudioClip
    // })
    // round1: cc.AudioClip = null;
    // @property({
    //     type: cc.AudioClip
    // })
    // round2: cc.AudioClip = null;
    // @property({
    //     type: cc.AudioClip
    // })
    // soundDE: cc.AudioClip = null;
    // @property({
    //     type: cc.AudioClip
    // })
    // soundGunAuto: cc.AudioClip = null;
    @property({
        type: cc.AudioClip
    })
    JokerVoice: cc.AudioClip = null;
    @property({
        type: cc.AudioClip
    })
    TouchSound: cc.AudioClip = null;


    PlaySoundGame()
    {
        cc.audioEngine.playEffect(this.BgSound, false);
       // cc.audioEngine.playEffect(this.VoiceSound, false);
    }
}
