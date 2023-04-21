import Singleton from "./Singleton";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Utility extends Singleton<Utility> {
    constructor() {
        super();
        Utility._instance = this;
    }
    static RandomRangeFloat(lower: number, upper: number) {
        return Math.random() * (upper - lower) + lower;
        //return Math.floor(Math.random() * (lower - lower)) + lower;
    }
    static RandomRangeInteger(lower: number, upper: number) {
        return Math.round(Math.random() * (upper - lower) + lower);
    }
    static Distance(vec1: cc.Vec2, vec2: cc.Vec2) {
        let Distance = Math.sqrt(Math.pow(vec1.x - vec2.x, 2) +
            Math.pow(vec1.y - vec2.y, 2));
        return Distance;
    }
    static CaculatorDuration(vec1: cc.Vec2, vec2: cc.Vec2, speed: number) {
        let distance = this.Distance(vec1, vec2);
        let duration = distance / speed;
        return duration;
    }
    public static LookAt(startPos: cc.Vec3, endPos: cc.Vec3) {
        const direction = endPos.sub(startPos);
        const directionNormalized = direction.normalize();
        const radianAngle = Math.atan2(directionNormalized.y, directionNormalized.x);
        const angle = cc.misc.radiansToDegrees(radianAngle);

        //return {
        // direction: direction,
        // directionNormalized: directionNormalized,
        // radianAngle: radianAngle,
        //angle: angle
        //}
        return angle;
    }
    static BetweenDegree(comVec: cc.Vec2, dirVec: cc.Vec2) {
        let angleDegree = Math.atan2(dirVec.y - comVec.y, dirVec.x - comVec.x) * 180 / Math.PI;
        return angleDegree - 90;
    }
    static CaculatorDegree(Target: cc.Vec2) {
        var r = Math.atan2(Target.y, Target.x);
        var degree = r * 180 / (Math.PI);
        degree = 360 - degree + 90;
        return degree;
    }
    static ConvertPosToCanvasByNode(objectParent: cc.Node, objectChildren: cc.Node) {
        var pos = cc.Canvas.instance.node.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(objectChildren.getPosition()));
        return pos;
    }
    static ConvertPosToCanvasByVector(objectParent: cc.Node, vector: cc.Vec2) {
        var pos = cc.Canvas.instance.node.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(vector));
        return pos;
    }
    static ConvertPosToHigherParentByNode(objectParentHigher: cc.Node, objectParent: cc.Node, objectChildren: cc.Node) {
        var pos = objectParentHigher.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(objectChildren.getPosition()));
        return pos;
    }
    static ConvertPosToParentByVector(objectParentHigher: cc.Node, objectParent: cc.Node, vector: cc.Vec2) {
        var pos = objectParentHigher.convertToNodeSpaceAR(objectParent.convertToWorldSpaceAR(vector));
        return pos;
    }
}
