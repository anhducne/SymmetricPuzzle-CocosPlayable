
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/ReadData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36f997/pFxJ0r68f4kWtPEU', 'ReadData');
// Scripts/Controller/ReadData.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Difficult;
(function (Difficult) {
    Difficult[Difficult["EASY"] = 0] = "EASY";
    Difficult[Difficult["NORMAL"] = 1] = "NORMAL";
    Difficult[Difficult["HARD"] = 2] = "HARD";
})(Difficult = exports.Difficult || (exports.Difficult = {}));
var SectionNotes = /** @class */ (function () {
    function SectionNotes() {
        this.timeStart = 0;
        this.pos = 0;
        this.length = 0;
    }
    SectionNotes = __decorate([
        ccclass('SectionNotes')
    ], SectionNotes);
    return SectionNotes;
}());
exports.SectionNotes = SectionNotes;
var Notes = /** @class */ (function () {
    function Notes() {
        this.typeOffSection = 0;
        this.lengthInSteps = 0;
        this.sectionNotes = [];
        this.mustHitSection = false;
        this.sectionData = [];
    }
    Notes = __decorate([
        ccclass('Notes')
    ], Notes);
    return Notes;
}());
exports.Notes = Notes;
var Song = /** @class */ (function () {
    function Song() {
        this.song = "";
        this.notes = [];
        this.needsVoices = false;
        this.speed = 0;
        this.bpm = 0;
    }
    Song = __decorate([
        ccclass('Song')
    ], Song);
    return Song;
}());
exports.Song = Song;
var SongData = /** @class */ (function () {
    function SongData() {
        this.song = null;
    }
    SongData = __decorate([
        ccclass('SongData')
    ], SongData);
    return SongData;
}());
exports.SongData = SongData;
var SongClip = /** @class */ (function () {
    function SongClip() {
        this.song = "";
        this.clipSong = null;
        this.clipVoice = null;
    }
    __decorate([
        property(cc.String)
    ], SongClip.prototype, "song", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], SongClip.prototype, "clipSong", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], SongClip.prototype, "clipVoice", void 0);
    SongClip = __decorate([
        ccclass('SongClip')
    ], SongClip);
    return SongClip;
}());
exports.SongClip = SongClip;
var ReadData = /** @class */ (function (_super) {
    __extends(ReadData, _super);
    function ReadData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.asset = null;
        _this.songData = null;
        // @property([SongClip])
        // songAudio: SongClip[] = [];
        _this.timeStartIChoose = 0;
        _this.diff = Difficult.EASY;
        return _this;
    }
    // @property(cc.String)
    // pathData: string = "";
    // @property(cc.String)
    // pathSong: string = "";
    ReadData.prototype.GetSongData = function () {
        return this.songData.song;
    };
    ReadData.prototype.GetSongClip = function () {
    };
    ReadData.prototype.start = function () {
        this.GenerateSFX();
    };
    ReadData.prototype.GenerateSFX = function () {
        //let diff = Difficult.EASY;
        //let json = cc.sys.localStorage.getItem(this.pathData);
        //let song = JsonParser.parse<SongData>(this.pathData);
        //cc.log(song.song);
        // this.scheduleOnce(() => {
        //     cc.log(JSON.stringify(JsonParser.parse<SongData>(this.pathData)));
        // }, 1);
        // let person: Person = new Person();
        // person.id = 10;
        // person.name = "Hieu";
        // let json = JSON.stringify(person);
        // cc.log(json);
        //var url = cc.url.raw(this.pathData);
        //cc.loader.loadRes('24 2zavodila-hard', cc.JsonAsset, (err, res) => {
        //console.log("Load Json");
        //let json = JSON.stringify(res);
        //let song: SongData = Object.assign(new SongData(), JSON.parse(res.json));
        //cc.log(res.json);
        //});     
        //RenderData Json - Hieu Wilson 
        var songFromJson = this.asset.json["song"][0];
        var songDataFromJson = new SongData();
        songDataFromJson.song = Object.assign(new SongData(), songFromJson);
        songDataFromJson.song.song = songFromJson.song;
        songDataFromJson.song.notes = songFromJson.notes;
        songDataFromJson.song.needsVoices = songFromJson.needsVoices;
        songDataFromJson.song.speed = songFromJson.speed;
        songDataFromJson.song.bpm = songFromJson.bpm;
        for (var i = 0; i < songFromJson.notes.length; i++) {
            songDataFromJson.song.notes[i].sectionData = [];
            for (var j = 0; j < songFromJson.notes[i].sectionNotes.length; j++) {
                var section = new SectionNotes();
                section.timeStart = songDataFromJson.song.notes[i].sectionNotes[j][0] / 1000;
                section.pos = Math.round(songDataFromJson.song.notes[i].sectionNotes[j][1]);
                section.length = songDataFromJson.song.notes[i].sectionNotes[j][2];
                songDataFromJson.song.notes[i].sectionData.push(section);
            }
            songDataFromJson.song.notes[i].sectionData.sort(function (n1, n2) { return n1.timeStart - n2.timeStart; });
        }
        for (var i = 0; i < songDataFromJson.song.notes.length; i++) {
            for (var j = 0; j < songDataFromJson.song.notes[i].sectionData.length; j++) {
                if (songDataFromJson.song.notes[i].sectionData[j].timeStart < this.timeStartIChoose) {
                    songDataFromJson.song.notes[i].sectionData.splice(j);
                }
            }
        }
        for (var i = 0; i < songDataFromJson.song.notes.length; i++) {
            for (var j = 0; j < songDataFromJson.song.notes[i].sectionData.length; j++) {
                songDataFromJson.song.notes[i].sectionData[j].timeStart = songDataFromJson.song.notes[i].sectionData[j].timeStart - this.timeStartIChoose;
            }
        }
        for (var i = 0; i < songDataFromJson.song.notes.length; i++) {
            for (var j = 0; j < songDataFromJson.song.notes[i].sectionData.length; j++) {
                for (var k = j + 1; k < songDataFromJson.song.notes[i].sectionData.length - 1; k++) {
                    if (songDataFromJson.song.notes[i].sectionData[j].timeStart == songDataFromJson.song.notes[i].sectionData[k].timeStart
                        && songDataFromJson.song.notes[i].sectionData[j].pos != songDataFromJson.song.notes[i].sectionData[k].pos) {
                        songDataFromJson.song.notes[i].sectionData[k].pos = songDataFromJson.song.notes[i].sectionData[j].pos;
                    }
                }
            }
        }
        this.songData = songDataFromJson;
        // for (let i = 0; i < this.songData.song.notes.length; i++) {
        //     for (let j = 0; j < this.songData.song.notes[i].sectionData.length; j++) {
        //         cc.log("time: " + this.songData.song.notes[i].sectionData[j].timeStart);
        //     }
        // }
    };
    __decorate([
        property(cc.JsonAsset)
    ], ReadData.prototype, "asset", void 0);
    __decorate([
        property(cc.Integer)
    ], ReadData.prototype, "timeStartIChoose", void 0);
    __decorate([
        property({ type: cc.Enum(Difficult) })
    ], ReadData.prototype, "diff", void 0);
    ReadData = __decorate([
        ccclass
    ], ReadData);
    return ReadData;
}(cc.Component));
exports.default = ReadData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcUmVhZERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUM1QyxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIseUNBQUksQ0FBQTtJQUNKLDZDQUFNLENBQUE7SUFDTix5Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFEQTtRQUVJLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFKWSxZQUFZO1FBRHhCLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDWCxZQUFZLENBSXhCO0lBQUQsbUJBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSxvQ0FBWTtBQU16QjtJQURBO1FBRUksbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFDOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFOWSxLQUFLO1FBRGpCLE9BQU8sQ0FBQyxPQUFPLENBQUM7T0FDSixLQUFLLENBTWpCO0lBQUQsWUFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLHNCQUFLO0FBUWxCO0lBREE7UUFFSSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBWSxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixRQUFHLEdBQVcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFOWSxJQUFJO1FBRGhC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QUNKO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyw4REFBOEQ7UUFDOUQsaUZBQWlGO1FBQ2pGLG1GQUFtRjtRQUNuRixRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUE1RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FDSTtJQUszQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzswQ0FDQztJQVR2QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0c1QjtJQUFELGVBQUM7Q0FoR0QsQUFnR0MsQ0FoR3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0dqRDtrQkFoR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSnNvblBhcnNlciBmcm9tIFwiLi9Kc29uUGFyc2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZW51bSBEaWZmaWN1bHQge1xyXG4gICAgRUFTWSxcclxuICAgIE5PUk1BTCxcclxuICAgIEhBUkRcclxufVxyXG5AY2NjbGFzcygnU2VjdGlvbk5vdGVzJylcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Ob3RlcyB7XHJcbiAgICB0aW1lU3RhcnQ6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IG51bWJlciA9IDA7XHJcbiAgICBsZW5ndGg6IG51bWJlciA9IDA7XHJcbn1cclxuQGNjY2xhc3MoJ05vdGVzJylcclxuZXhwb3J0IGNsYXNzIE5vdGVzIHtcclxuICAgIHR5cGVPZmZTZWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgbGVuZ3RoSW5TdGVwczogbnVtYmVyID0gMDtcclxuICAgIHNlY3Rpb25Ob3RlczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgbXVzdEhpdFNlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlY3Rpb25EYXRhOiBTZWN0aW9uTm90ZXNbXSA9IFtdO1xyXG59XHJcbkBjY2NsYXNzKCdTb25nJylcclxuZXhwb3J0IGNsYXNzIFNvbmcge1xyXG4gICAgc29uZzogU3RyaW5nID0gXCJcIjtcclxuICAgIG5vdGVzOiBOb3Rlc1tdID0gW107XHJcbiAgICBuZWVkc1ZvaWNlczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBicG06IG51bWJlciA9IDA7XHJcbn1cclxuQGNjY2xhc3MoJ1NvbmdEYXRhJylcclxuZXhwb3J0IGNsYXNzIFNvbmdEYXRhIHtcclxuICAgIHNvbmc6IFNvbmcgPSBudWxsO1xyXG59XHJcbkBjY2NsYXNzKCdTb25nQ2xpcCcpXHJcbmV4cG9ydCBjbGFzcyBTb25nQ2xpcCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgc29uZzogc3RyaW5nID0gXCJcIjtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICB9KVxyXG4gICAgY2xpcFNvbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgfSlcclxuICAgIGNsaXBWb2ljZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZERhdGEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcclxuICAgIGFzc2V0OiBjYy5Kc29uQXNzZXQgPSBudWxsO1xyXG4gICAgc29uZ0RhdGE6IFNvbmdEYXRhID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShbU29uZ0NsaXBdKVxyXG4gICAgLy8gc29uZ0F1ZGlvOiBTb25nQ2xpcFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRpbWVTdGFydElDaG9vc2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKERpZmZpY3VsdCkgfSlcclxuICAgIHB1YmxpYyBkaWZmOiBEaWZmaWN1bHQgPSBEaWZmaWN1bHQuRUFTWTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICAvLyBwYXRoRGF0YTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICAvLyBwYXRoU29uZzogc3RyaW5nID0gXCJcIjtcclxuICAgIEdldFNvbmdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvbmdEYXRhLnNvbmc7XHJcbiAgICB9XHJcbiAgICBHZXRTb25nQ2xpcCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmF0ZVNGWCgpO1xyXG4gICAgfVxyXG4gICAgR2VuZXJhdGVTRlgoKSB7XHJcbiAgICAgICAgLy9sZXQgZGlmZiA9IERpZmZpY3VsdC5FQVNZO1xyXG4gICAgICAgIC8vbGV0IGpzb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wYXRoRGF0YSk7XHJcbiAgICAgICAgLy9sZXQgc29uZyA9IEpzb25QYXJzZXIucGFyc2U8U29uZ0RhdGE+KHRoaXMucGF0aERhdGEpO1xyXG4gICAgICAgIC8vY2MubG9nKHNvbmcuc29uZyk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coSlNPTi5zdHJpbmdpZnkoSnNvblBhcnNlci5wYXJzZTxTb25nRGF0YT4odGhpcy5wYXRoRGF0YSkpKTtcclxuICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICAvLyBsZXQgcGVyc29uOiBQZXJzb24gPSBuZXcgUGVyc29uKCk7XHJcbiAgICAgICAgLy8gcGVyc29uLmlkID0gMTA7XHJcbiAgICAgICAgLy8gcGVyc29uLm5hbWUgPSBcIkhpZXVcIjtcclxuICAgICAgICAvLyBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KHBlcnNvbik7XHJcbiAgICAgICAgLy8gY2MubG9nKGpzb24pO1xyXG4gICAgICAgIC8vdmFyIHVybCA9IGNjLnVybC5yYXcodGhpcy5wYXRoRGF0YSk7XHJcbiAgICAgICAgLy9jYy5sb2FkZXIubG9hZFJlcygnMjQgMnphdm9kaWxhLWhhcmQnLCBjYy5Kc29uQXNzZXQsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJMb2FkIEpzb25cIik7XHJcbiAgICAgICAgLy9sZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XHJcbiAgICAgICAgLy9sZXQgc29uZzogU29uZ0RhdGEgPSBPYmplY3QuYXNzaWduKG5ldyBTb25nRGF0YSgpLCBKU09OLnBhcnNlKHJlcy5qc29uKSk7XHJcbiAgICAgICAgLy9jYy5sb2cocmVzLmpzb24pO1xyXG4gICAgICAgIC8vfSk7ICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vUmVuZGVyRGF0YSBKc29uIC0gSGlldSBXaWxzb24gXHJcbiAgICAgICAgbGV0IHNvbmdGcm9tSnNvbiA9IHRoaXMuYXNzZXQuanNvbltcInNvbmdcIl1bMF07XHJcbiAgICAgICAgbGV0IHNvbmdEYXRhRnJvbUpzb246IFNvbmdEYXRhID0gbmV3IFNvbmdEYXRhKCk7XHJcbiAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nID0gT2JqZWN0LmFzc2lnbihuZXcgU29uZ0RhdGEoKSwgc29uZ0Zyb21Kc29uKTtcclxuICAgICAgICBzb25nRGF0YUZyb21Kc29uLnNvbmcuc29uZyA9IHNvbmdGcm9tSnNvbi5zb25nO1xyXG4gICAgICAgIHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3RlcyA9IHNvbmdGcm9tSnNvbi5ub3RlcztcclxuICAgICAgICBzb25nRGF0YUZyb21Kc29uLnNvbmcubmVlZHNWb2ljZXMgPSBzb25nRnJvbUpzb24ubmVlZHNWb2ljZXM7XHJcbiAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nLnNwZWVkID0gc29uZ0Zyb21Kc29uLnNwZWVkO1xyXG4gICAgICAgIHNvbmdEYXRhRnJvbUpzb24uc29uZy5icG0gPSBzb25nRnJvbUpzb24uYnBtO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ0Zyb21Kc29uLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvbmdGcm9tSnNvbi5ub3Rlc1tpXS5zZWN0aW9uTm90ZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uOiBTZWN0aW9uTm90ZXMgPSBuZXcgU2VjdGlvbk5vdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnRpbWVTdGFydCA9IHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uTm90ZXNbal1bMF0gLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5wb3MgPSBNYXRoLnJvdW5kKHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uTm90ZXNbal1bMV0pO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5sZW5ndGggPSBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbk5vdGVzW2pdWzJdO1xyXG4gICAgICAgICAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhLnB1c2goc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhLnNvcnQoKG4xLCBuMikgPT4gbjEudGltZVN0YXJ0IC0gbjIudGltZVN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGFbal0udGltZVN0YXJ0IDwgdGhpcy50aW1lU3RhcnRJQ2hvb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhLnNwbGljZShqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHRcdCBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uRGF0YS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhW2pdLnRpbWVTdGFydCAgPSBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGFbal0udGltZVN0YXJ0IC0gdGhpcy50aW1lU3RhcnRJQ2hvb3NlO1x0XHRcdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBqICsgMTsgayA8IHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uRGF0YS5sZW5ndGggLSAxOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhW2pdLnRpbWVTdGFydCA9PSBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGFba10udGltZVN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHNvbmdEYXRhRnJvbUpzb24uc29uZy5ub3Rlc1tpXS5zZWN0aW9uRGF0YVtqXS5wb3MgIT0gc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhW2tdLnBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb25nRGF0YUZyb21Kc29uLnNvbmcubm90ZXNbaV0uc2VjdGlvbkRhdGFba10ucG9zID0gc29uZ0RhdGFGcm9tSnNvbi5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhW2pdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29uZ0RhdGEgPSBzb25nRGF0YUZyb21Kc29uO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb25nRGF0YS5zb25nLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zb25nRGF0YS5zb25nLm5vdGVzW2ldLnNlY3Rpb25EYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCJ0aW1lOiBcIiArIHRoaXMuc29uZ0RhdGEuc29uZy5ub3Rlc1tpXS5zZWN0aW9uRGF0YVtqXS50aW1lU3RhcnQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19