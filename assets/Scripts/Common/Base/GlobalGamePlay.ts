import GameManager2 from "../../Manager/GameManager2";
import Singleton from "../Singleton";

const { ccclass, property } = cc._decorator;
export const eventDispatcher = new cc.EventTarget();
@ccclass
export default class GlobalGamePlay extends Singleton<GlobalGamePlay> {
    gameplay: GameManager2 = GameManager2.Instance(GameManager2);
    constructor() {
        super();
        GlobalGamePlay._instance = this;
    }
}