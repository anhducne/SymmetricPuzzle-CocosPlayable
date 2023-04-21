"use strict";
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