/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>

var kefu = angular.module("RongCloudkefu", ["RongWebIMWidget"]);

kefu.service("RongKefu", ["WebIMWidget", function(WebIMWidget: WebIMWidget) {
    var kefuServer = <KefuServer>{};
    var defaultconfig = <any>{};

    kefuServer.init = function(config) {
        angular.extend(defaultconfig, config)
        kefuServer._config = config;
        var style = <any>{
            right: 20
        }
        if (config.position) {
            if (config.position == KefuPostion.left) {
                style = {
                    left: 20,
                    positionFixed: true
                };
            } else {
                style = {
                    right: 20,
                    positionFixed: true
                };
            }
        }
        WebIMWidget.init({
            appkey: config.appkey,
            token: config.token,
            reminder: config.reminder,
            onSuccess: function(e) {
                config.onSuccess && config.onSuccess(e);
            },
            style: style
        });
        WebIMWidget.onShow = function() {
            WebIMWidget.setConversation(WidgetModule.EnumConversationType.CUSTOMER_SERVICE, config.kefuId, "客服");
        }

    }

    kefuServer.show = function() {
        WebIMWidget.show();
    }

    kefuServer.hidden = function() {
        WebIMWidget.hidden();
    }

    kefuServer.KefuPostion = KefuPostion;

    return kefuServer;
}]);

interface KefuServer {
    init(config: KefuConfig): void
    show(): void
    hidden(): void
    KefuPostion: any
    _config: any
}

interface KefuConfig {
    appkey: string
    token: string
    kefuId: string
    reminder: string
    position: KefuPostion
    onSuccess(par?: any): void
}
enum KefuPostion {
    left = 1, right = 2
}
