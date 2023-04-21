(function () {

    cc.DebugMode = {};
    cc.DebugMode.INFO = 0;
    cc.DebugMode.ERROR = 1;

    function boot() {

        var settings = window._CCSettings;
        window._CCSettings = undefined;

        if (!settings.debug) {
            var uuids = settings.uuids;

            var rawAssets = settings.rawAssets;
            var assetTypes = settings.assetTypes;
            var realRawAssets = settings.rawAssets = {};
            for (var mount in rawAssets) {
                var entries = rawAssets[mount];
                var realEntries = realRawAssets[mount] = {};
                for (var id in entries) {
                    var entry = entries[id];
                    var type = entry[1];
                    // retrieve minified raw asset
                    if (typeof type === 'number') {
                        entry[1] = assetTypes[type];
                    }
                    // retrieve uuid
                    realEntries[uuids[id] || id] = entry;
                }
            }

            var scenes = settings.scenes;
            for (var i = 0; i < scenes.length; ++i) {
                var scene = scenes[i];
                if (typeof scene.uuid === 'number') {
                    scene.uuid = uuids[scene.uuid];
                }
            }

            var packedAssets = settings.packedAssets;
            for (var packId in packedAssets) {
                var packedIds = packedAssets[packId];
                for (var j = 0; j < packedIds.length; ++j) {
                    if (typeof packedIds[j] === 'number') {
                        packedIds[j] = uuids[packedIds[j]];
                    }
                }
            }

            var subpackages = settings.subpackages;
            for (var subId in subpackages) {
                var uuidArray = subpackages[subId].uuids;
                if (uuidArray) {
                    for (var k = 0, l = uuidArray.length; k < l; k++) {
                        if (typeof uuidArray[k] === 'number') {
                            uuidArray[k] = uuids[uuidArray[k]];
                        }
                    }
                }
            }
        }

        function setLoadingDisplay() {
            // Loading splash scene
            var splash = document.getElementById('splash');
            var progressBar = splash.querySelector('.progress-bar span');
            cc.loader.onProgress = function (completedCount, totalCount, item) {
                var percent = 100 * completedCount / totalCount;
                if (progressBar) {
                    progressBar.style.width = percent.toFixed(2) + '%';
                }
            };
            splash.style.display = 'block';
            progressBar.style.width = '0%';

            cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
                splash.style.display = 'none';
            });
        }

        var onStart = function () {
            cc.loader.downloader._subpackages = settings.subpackages;

            // cc.view.enableRetina(true);
            cc.view.resizeWithBrowserSize(true);

            if (!false && !false) {
                // UC browser on many android devices have performance issue with retina display
                if (cc.sys.os !== cc.sys.OS_ANDROID || cc.sys.browserType !== cc.sys.BROWSER_TYPE_UC) {
                    cc.view.enableRetina(true);
                }
                if (cc.sys.isBrowser) {
                    setLoadingDisplay();
                }

                if (cc.sys.isMobile) {
                    if (settings.orientation === 'landscape') {
                        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                    }
                    else if (settings.orientation === 'portrait') {
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                    }
                    cc.view.enableAutoFullScreen([
                        cc.sys.BROWSER_TYPE_BAIDU,
                        cc.sys.BROWSER_TYPE_WECHAT,
                        cc.sys.BROWSER_TYPE_MOBILE_QQ,
                        cc.sys.BROWSER_TYPE_MIUI,
                    ].indexOf(cc.sys.browserType) < 0);
                }

                // Limit downloading max concurrent task to 2,
                // more tasks simultaneously may cause performance draw back on some android system / brwosers.
                // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
                if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
                    cc.macro.DOWNLOAD_MAX_CONCURRENT = 2;
                }
            }

            // load scene
            function loadScene(launchScene) {
                cc.director.loadScene(launchScene, null,
                    function () {
                        if (cc.sys.isBrowser) {
                            // show canvas
                            var canvas = document.getElementById('GameCanvas');
                            canvas.style.visibility = '';
                            var div = document.getElementById('GameDiv');
                            if (div) {
                                div.style.backgroundImage = '';
                            }
                        }
                        cc.loader.onProgress = null;
                        console.log('Success to load scene: ' + launchScene);
                    }
                );

            }

            var launchScene = settings.launchScene;

            // load scene
            loadScene(launchScene);
        };

        //DOAN NAY SUA LAI cho jsList = [], cmt lai toan bo code jslist************

        // jsList
        // var jsList = settings.jsList;

        // var bundledScript = settings.debug ? 'src/project.dev.js' : 'src/project.js';
        // if (jsList) {
        //     jsList = jsList.map(function (x) {
        //         return 'src/' + x;
        //     });
        //     jsList.push(bundledScript);
        // }
        // else {
        //     jsList = [bundledScript];
        // }
        var jsList = [];
        //********************

        var option = {
            //width: width,
            //height: height,
            id: 'GameCanvas',
            scenes: settings.scenes,
            debugMode: settings.debug ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
            showFPS: (!false && !false) && settings.debug,
            frameRate: 60,
            jsList: jsList,
            groupList: settings.groupList,
            collisionMatrix: settings.collisionMatrix,
            //Them dong duoi ***************
            renderMode: 0
            //****************
        }

        // init assets
        cc.AssetLibrary.init({
            libraryPath: 'res/import',
            rawAssetsBase: 'res/raw-',
            rawAssets: settings.rawAssets,
            packedAssets: settings.packedAssets,
            md5AssetsMap: settings.md5AssetsMap,
            subpackages: settings.subpackages
        });

        cc.game.run(option, onStart);
    }





    if (window.document) {

        var __audioSupport = cc.sys.__audioSupport;
        var formatSupport = __audioSupport.format;
        var context = __audioSupport.context;

        // 转二进制Blob
        function base64toBlob(base64, type) {
            // 将base64转为Unicode规则编码
            var bstr = atob(base64, type),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n) // 转换编码后才可以使用charCodeAt 找到Unicode编码
            }
            return new Blob([u8arr], {
                type: type,
            })
        }

        // 转二进制
        function base64toArray(base64) {
            // 将base64转为Unicode规则编码
            var bstr = atob(base64),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n) // 转换编码后才可以使用charCodeAt 找到Unicode编码
            }

            return u8arr;
        }

        // 加载domaudio
        function loadDomAudio(item, callback) {
            var dom = document.createElement('audio');

            dom.muted = true;
            dom.muted = false;

            var data = window.resMap[item.url.split("?")[0]];
            data = base64toBlob(data, "audio/mpeg");

            if (window.URL) {
                dom.src = window.URL.createObjectURL(data);
            } else {
                dom.src = data;
            }


            var clearEvent = function () {
                clearTimeout(timer);
                dom.removeEventListener("canplaythrough", success, false);
                dom.removeEventListener("error", failure, false);
                if (__audioSupport.USE_LOADER_EVENT)
                    dom.removeEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
            };
            var timer = setTimeout(function () {
                if (dom.readyState === 0)
                    failure();
                else
                    success();
            }, 8000);
            var success = function () {
                clearEvent();
                item.element = dom;
                callback(null, item.element);
            };
            var failure = function () {
                clearEvent();
                var message = 'load audio failure - ' + item.url;
                cc.log(message);
                callback(message, item.url);
            };
            dom.addEventListener("canplaythrough", success, false);
            dom.addEventListener("error", failure, false);
            if (__audioSupport.USE_LOADER_EVENT)
                dom.addEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
        }

        // 加载webaudio
        function loadWebAudio(item, callback) {
            if (!context)
                callback(new Error(debug.getError(4926)));

            var data = window.resMap[item.url];
            data = base64toArray(data);

            if (data) {
                context["decodeAudioData"](data.buffer, function (buffer) {
                    //success
                    item.buffer = buffer;
                    callback(null, item.buffer);
                }, function () {
                    //error
                    callback('decode error - ' + item.id, null);
                });
            } else {
                callback('request error - ' + item.id, null);
            }
        }

        // web加载数据方法
        var arrayBufferHandler = (item, callback, isCrossOrigin, img) => {
            var index = item.url.lastIndexOf(".");
            var strtype = item.url.substr(index + 1, 4);
            strtype = strtype.toLowerCase();
            var data = window.resMap[item.url];

            var img = new Image();
            function loadCallback() {
                img.removeEventListener('load', loadCallback);
                img.removeEventListener('error', errorCallback);
                setTimeout(function () {
                    callback(null, img);
                }, 1);
            }
            function errorCallback() {
                img.removeEventListener('load', loadCallback);
                img.removeEventListener('error', errorCallback);

                // Retry without crossOrigin mark if crossOrigin loading fails
                // Do not retry if protocol is https, even if the image is loaded, cross origin image isn't renderable.

                callback(new Error('Load image (' + url + ') failed'));
            }

            img.addEventListener('load', loadCallback);
            img.addEventListener('error', errorCallback);
            img.src = data;
        };

        // web加载数据方法
        var jsonBufferHandler = (item, callback) => {
            var str = window.resMap[item.url];
            setTimeout(function () {
                callback(null, str);
            }, 1);
        };

        var base64BufferHandler = (item, callback) => {
            var str = window.resMap[item.url];
            setTimeout(function () {
                callback(null, atob(str));
            }, 1);
        };

        var ttfBufferHandler = (item, callback) => {
            var str = window.resMap[item.url];
            setTimeout(function () {
                callback(null, 'data:application/octet-stream;base64,' + str);
            }, 1);
        };

        // web加载音频
        var audioBufferHandler = (item, callback) => {
            if (formatSupport.length === 0) {
                return new Error(debug.getError(4927));
            }

            var loader;
            if (!__audioSupport.WEB_AUDIO) {
                // If WebAudio is not supported, load using DOM mode
                loader = loadDomAudio;
            }
            else {
                var loadByDeserializedAudio = item._owner instanceof cc.AudioClip;
                if (loadByDeserializedAudio) {
                    loader = (item._owner.loadMode === cc.AudioClip.LoadMode.WEB_AUDIO) ? loadWebAudio : loadDomAudio;
                }
                else {
                    loader = (item.urlParam && item.urlParam['useDom']) ? loadDomAudio : loadWebAudio;
                }
            }
            loader(item, callback);
        }
		var downloadBinBinary = (item, callback) => {
			var arrayBuffer = base64toArray(window.resMap[item.url]);
			if (arrayBuffer) {
				var result = new Uint8Array(arrayBuffer);
				callback(null, result);
			}
			else {
				callback({status:xhr.status, errorMessage:errInfo + '(no response)'});
			}
		}
        // 添加加载函数
        cc.loader.addDownloadHandlers({
            png: arrayBufferHandler,
            jpg: arrayBufferHandler,
            jpeg: arrayBufferHandler,
        });

        cc.loader.addDownloadHandlers({
            json: base64BufferHandler,
            plist: base64BufferHandler,
            ttf: ttfBufferHandler
        });

        cc.loader.addDownloadHandlers({
            mp3: audioBufferHandler,
            ogg: audioBufferHandler,
            wav: audioBufferHandler,
            m4a: audioBufferHandler,
			bin: downloadBinBinary
        })

        var splash = document.getElementById('splash');
        splash.style.display = 'block';

        boot();
    }

})();
