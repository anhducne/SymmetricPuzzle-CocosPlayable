
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Common/AdManager');
require('./assets/Scripts/Common/Base/EnableEngine');
require('./assets/Scripts/Common/Base/Global');
require('./assets/Scripts/Common/Base/GlobalGamePlay');
require('./assets/Scripts/Common/CanvasResizer');
require('./assets/Scripts/Common/CanvasTouch');
require('./assets/Scripts/Common/DestroyVFX');
require('./assets/Scripts/Common/EnumDefine');
require('./assets/Scripts/Common/KeyEvent');
require('./assets/Scripts/Common/PlatformBtn');
require('./assets/Scripts/Common/Pool/BasePool');
require('./assets/Scripts/Common/Pool/PoolManager');
require('./assets/Scripts/Common/Singleton');
require('./assets/Scripts/Common/SoundManager');
require('./assets/Scripts/Common/Utility');
require('./assets/Scripts/Controller/JsonParser');
require('./assets/Scripts/Controller/ObjectCongrat');
require('./assets/Scripts/Controller/ObjectMove');
require('./assets/Scripts/Controller/ReadData');
require('./assets/Scripts/Manager/GameManager2');
require('./assets/SymmetricGamePlay/Scripts/DragRotate');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');

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