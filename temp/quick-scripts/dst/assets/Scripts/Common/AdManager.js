
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46290lxct5FwYsg5tOn8sdV', 'AdManager');
// Scripts/Common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;

    if (window.openAdUrl) {
      window.openAdUrl();
    } else {
      window.open();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNsaWNrVGFnIiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQ25CLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBSyxJQUFBQSxNQUFNLENBQUNKLE9BQVAsR0FBaUIsS0FBS0EsT0FBdEI7QUFDQUksSUFBQUEsTUFBTSxDQUFDSCxXQUFQLEdBQXFCLEtBQUtBLFdBQTFCOztBQUNBLFFBQUlHLE1BQU0sQ0FBQ0YsU0FBWCxFQUFzQjtBQUNsQkUsTUFBQUEsTUFBTSxDQUFDRixTQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0hFLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUDtBQUNIO0FBQ0o7QUF6QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhbmRyb2lkTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdExpbms6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5BZFVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjbGlja1RhZyA9ICcnO1xyXG4gICAgICAgIHdpbmRvdy5hbmRyb2lkTGluayA9IHRoaXMuYW5kcm9pZExpbms7XHJcbiAgICAgICAgd2luZG93Lmlvc0xpbmsgPSB0aGlzLmlvc0xpbms7XHJcbiAgICAgICAgd2luZG93LmRlZmF1bHRMaW5rID0gdGhpcy5kZWZhdWx0TGluaztcclxuICAgICAgICBpZiAod2luZG93Lm9wZW5BZFVybCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbkFkVXJsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==