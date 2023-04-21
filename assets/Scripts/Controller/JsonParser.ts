const { ccclass, property } = cc._decorator;

@ccclass
export default class JsonParser extends cc.Component {
    static parse<T>(resourcePath: string): T {
        let ClassToParse: T;
        cc.loader.loadRes(resourcePath, (err, res) => {
            //console.log("Load Json");
            ClassToParse = res.json;
        });
        return ClassToParse;
    }
}
