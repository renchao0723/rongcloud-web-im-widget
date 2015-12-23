angular.module('rongWebimWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div class=outer><div class=main><div class=title><span>{{currentConversation.title}}</span></div><div id=Messages class=msgcontent><div class=message ng-repeat=\"item in messageList\"><span class=user>{{item.content.userInfo.name}}：</span><div class=content ng-class=\"{'recieve':item.messageDirection==2}\">{{item.content.content}}</div></div></div><div class=send><textarea class=textarea name=name ng-model=messageContent></textarea><button style=\"margin-top:-30px;    position: relative;\n" +
    "                    top: -30px\" type=button name=button ng-click=send()>send<tton></tton></button></div></div></div>"
  );

}]);
