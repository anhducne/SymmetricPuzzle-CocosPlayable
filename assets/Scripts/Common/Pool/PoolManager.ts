import BasePool from "./BasePool";
import Singleton from "../Singleton";
import { BulletType, ShipType } from "../EnumDefine";
const { ccclass, property } = cc._decorator;

@ccclass('Bullet')
export class Bullet {
    @property(BasePool)
    Pool: BasePool = null;
    @property({ type: cc.Enum(BulletType) })
    public typeBullet: BulletType = BulletType.B5;
}
@ccclass('Dragon')
export class Ship {
    @property(BasePool)
    Pool: BasePool = null;
    @property({ type: cc.Enum(ShipType) })
    public typeship: ShipType = ShipType.S1;
}
@ccclass
export default class PoolManager extends Singleton<PoolManager> {
    @property(Bullet)
    arrayBullet: Bullet[] = [];
    @property(Ship)
    arrayShip: Ship[] = [];
    @property(BasePool)
    hitVFX: BasePool = null;
    @property(BasePool)
    hitVFX2: BasePool = null;
    @property(BasePool)
    enemyExplosion: BasePool = null;
    @property(BasePool)
    enemyExplosion2: BasePool = null;
    @property(BasePool)
    Coin: BasePool = null;
    constructor() {
        super();
        PoolManager._instance = this;
    }
    SpawnerBullet(type: BulletType): cc.Node {
        for (let i = 0; i < this.arrayBullet.length; ++i) {
            if (type == this.arrayBullet[i].typeBullet) {
                return this.arrayBullet[i].Pool.createObject(this.node);
            }
        }
    }
    SpawnerShip(type: ShipType): cc.Node {
        for (let i = 0; i < this.arrayShip.length; ++i) {
            if (type == this.arrayShip[i].typeship) {
                return this.arrayShip[i].Pool.createObject(this.node);
            }
        }
    }
    RecycleBullet(type: BulletType, node: cc.Node) {
        for (let i = 0; i < this.arrayBullet.length; ++i)
            if (type == this.arrayBullet[i].typeBullet) {
                this.arrayBullet[i].Pool.RecycleObject(node);
            }
    }
}
