
export default class Singleton<T> extends cc.Component{
    public static Instance<T>(c: {new(): T; }) : T{
        if (this._instance == null){
            this._instance = new c();
        }
        return this._instance;
    }
    public static _instance = null;
}
