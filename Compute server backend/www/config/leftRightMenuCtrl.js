angular.module("CipherX.controllers").controller("LeftRightNavsCtrl",["$rootScope","$scope","$stateParams","$timeout","$localstorage","$mdDialog","$mdSidenav","$location",function(e,o,a,t,l,n,c,d){function r(e){return function(){c(e).toggle().then(function(){})}}o.isActive=function(e){return e===d.path()},e.toggleLeft=r("left"),e.toggleRight=r("right"),o.onSwipeLeft=function(){e.toggleRight()},o.onSwipeRight=function(){e.toggleLeft()},o.CBClear=function(){e.appDataFields.CodeBlock=""},o.CBCopyFB=function(){e.appDataFields.CodeBlock=e.appDataFields.ReferenceBlock},o.undoCBText=function(){document.execCommand("undo")},o.redoCBText=function(){document.execCommand("redo")},o.showAddSpaceDialog=function(e){n.show({templateUrl:"templates/addSpaceDialog.html",parent:angular.element(document.body),targetEvent:e,controller:"addSpaceDialogCtrl"}).then(function(e){o.CBaddSpace(e)},function(){})},o.CBaddSpace=function(o){if(y=parseInt(o),y>0&&e.appDataFields.CodeBlock){for(z="",i=0;i<e.appDataFields.CodeBlock.length;i+=y)z+=e.appDataFields.CodeBlock.substr(i,y),i<e.appDataFields.CodeBlock.length-y&&(z+=" ");e.appDataFields.CodeBlock=z}},o.showCharFrequencyDialog=function(o){n.show({templateUrl:"templates/charFrequencyDialog.html",parent:angular.element(document.body),targetEvent:o,locals:{codeBlockText:e.appDataFields.CodeBlock},controller:"charFrequencyDialogCtrl"})},o.CBupperCase=function(){e.appDataFields.CodeBlock=e.appDataFields.CodeBlock.toUpperCase()},o.CBlowerCase=function(){e.appDataFields.CodeBlock=e.appDataFields.CodeBlock.toLowerCase()},o.CBilliminateSpace=function(){e.appDataFields.CodeBlock=e.appDataFields.CodeBlock.replace(/\s/g,"")},o.CBspaceToParagraph=function(){e.appDataFields.CodeBlock=e.appDataFields.CodeBlock.replace(/\s/g,"\r\n")},o.CBreverseParagraph=function(){var o="",a=e.appDataFields.CodeBlock.split(" ");for(i=0;i<a.length;i++){for(var t="",l=0;l<a[i].length;l++)t=a[i].charAt(l)+t;o+=t,i<a.length-1&&(o+=" ")}e.appDataFields.CodeBlock=o},o.CBreverseWholeField=function(){for(var o="",a=0;a<e.appDataFields.CodeBlock.length;a++)o=e.appDataFields.CodeBlock.charAt(a)+o;e.appDataFields.CodeBlock=o},o.closehistoryListModal=function(){o.historyListModal.remove()},o.FABencipher=function(){addToLocalHistoryList(),applyCipherMethod()},o.historyDelete=function(e){findAndRemoveHistory("time",e)},o.historyCopyToCB=function(o){e.appDataFields.CodeBlock=o}}]).controller("addSpaceDialogCtrl",["$scope","$mdDialog",function(e,o){e.hide=function(){o.hide()},e.cancel=function(){o.cancel()},e.answer=function(e){o.hide(e)}}]).controller("charFrequencyDialogCtrl",["$scope","$mdDialog","codeBlockText",function(e,o,a){if(a)var t=a.toUpperCase();else var t="";console.log(t.length);var l="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(d=new Array(36),i=0;i<36;i++)d[i]={count:0,percent:0};for(n=0,i=0;i<t.length;i++)idx=l.indexOf(t.charAt(i)),idx!=-1&&(d[idx].count++,n++);for(i=0;i<36;i++)d[i].percent=Math.round(100*d[i].count/n);e.firstRowFreq=d.slice(0,12),e.secondRowFreq=d.slice(12,24),e.thirdRowFreq=d.slice(24),e.charFreq=[d.slice(0,12),d.slice(12,24),d.slice(24)],e.charList=[l.slice(0,12),l.slice(12,24),l.slice(24)],e.hide=function(){o.hide()},e.cancel=function(){o.cancel()}}]);