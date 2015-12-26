angular.module('rongWebimWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div class=\"outer am-fade-and-slide-top\" ng-show=resoures.display><div class=main><div class=title><span>{{currentConversation.title}}</span> <button style=\"float: right;margin: 10px;padding:3px\" ng-click=\"resoures.display=false;\">X</button></div><div id=Messages class=msgcontent><div class=message ng-repeat=\"item in messageList\"><span class=user>{{item.content.userInfo.name}}：</span><div class=content ng-class=\"{'recieve':item.messageDirection==2}\">{{item.content.content}}</div></div></div><div class=send><textarea class=textarea name=name ng-model=messageContent></textarea><button style=\"margin-top:-30px;    position: relative;\n" +
    "                    top: -30px\" type=button name=button ng-click=send()>send<tton></tton></button></div></div></div>"
  );

}]);
