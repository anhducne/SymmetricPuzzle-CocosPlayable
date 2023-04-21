cc.Class({
    extends: cc.Component,

    properties: {
        androidLink: {
            default: ''
        },
        iosLink: {
            default: ''
        },
        defaultLink: {
            default: ''
        }
    },

    openAdUrl: function () {
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