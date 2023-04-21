import GlobalGamePlay from "../Common/Base/GlobalGamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ObjectMove extends cc.Component {
    @property(cc.BoxCollider)
    boxCollider: cc.BoxCollider = null;
    @property(cc.Float)
    speedInit: number = 0;
    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(cc.Node)
    trail: cc.Node = null;
    @property(cc.SpriteFrame)
    arraySprites: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame)
    arraySpritesHurtNotes: cc.SpriteFrame[] = [];
    @property(cc.Prefab)
    effectPref: cc.Prefab[] = [];
    isActive: boolean = false;
    isHit: boolean = false;
    isBonusScore: boolean = false;
    currentSpeed: number = 0;
    y: number = 0;
    time: number = 0;
    type: number = 0;
    transformCollision: cc.Vec2 = null;
    SetActive(type: number, scale: number, speed: number, isHit: boolean) {
        this.type = type;
        this.isHit = isHit;
        this.isBonusScore = (scale != 0 && this.isHit);
        if (isHit) {
            this.boxCollider.enabled = true;
            this.img.spriteFrame = this.arraySprites[type];

            this.trail.scaleX = 1;
            this.trail.scaleY = scale;
            this.y = -306 - (100 * scale);
        }
        else {
            this.boxCollider.enabled = false;
            this.img.spriteFrame = this.arraySpritesHurtNotes[type];
            //this.img = null;
            this.trail.scale = 0;
        }
        this.currentSpeed = this.speedInit * speed;
        this.isActive = true;
    }
    protected update(dt: number): void {
        this.node.y += this.currentSpeed * dt;
        if (this.node.y < -306 && this.isActive) {
            if (!this.isHit) {
                this.isActive = false;
                this.node.destroy();
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.EnemyAnimation(this.type);

            }
            else {
                if (this.node.y < -410) {
                    this.isActive = false;
                    this.isBonusScore = false;
                    GlobalGamePlay.Instance(GlobalGamePlay).gameplay.OnMiss();
                    this.node.destroy();
                }
            }
        }
        if (this.isBonusScore && !this.isActive) {
            if (this.transformCollision.x > this.node.x + 30 || this.transformCollision.x < this.node.x - 30 || this.node.y < this.y) {
                this.isBonusScore = false;
                this.node.destroy();

                //Stop sound gun auto

            }
            else {
                this.time += dt;
                //Play sound gun auto
                if (this.time > 0.1) {
                    this.time = 0;
                    GlobalGamePlay.Instance(GlobalGamePlay).gameplay.OnAddScore(30);
                }
            }
        }
    }
    onCollisionEnter(Other: cc.Collider, mySelf: cc.Collider) {
        if (this.isActive) {
            this.isActive = false;
            if (Other.node.group == "ObjectTarget") {
                GlobalGamePlay.Instance(GlobalGamePlay).gameplay.PlayerAnimation(this.type);
                if (this.node.y < Other.node.y) {
                    GlobalGamePlay.Instance(GlobalGamePlay).gameplay.OnAddScore(250);
                }
                else {
                    GlobalGamePlay.Instance(GlobalGamePlay).gameplay.OnAddScore(500);
                }
                //if (!this.isBonusScore) {
                    //this.scheduleOnce(() => {
                        this.node.destroy();
                    //}, 0.1);
                //}
                //Play Sound Gun DE
                // cc.audioEngine.playEffect(GlobalGamePlay.Instance(GlobalGamePlay).gameplay.soundManager.soundDE, false);
                this.SpawnerEffectObject(this.type, mySelf.node);
            }
        }
    }
    SpawnerEffectObject(type: number, pos: cc.Node) {
        var eff = cc.instantiate(this.effectPref[type]);
        eff.setParent(GlobalGamePlay.Instance(GlobalGamePlay).gameplay.effectParent);
        eff.setPosition(pos.x, pos.y - 20);
    }
}
