"use strict";
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