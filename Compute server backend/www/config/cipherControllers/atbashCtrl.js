angular.module("CipherX.controllers").controller("AtbashCtrl",["$scope","$rootScope","$stateParams","cfpLoadingBar",function(a,e,r,t){function o(){for(var a="",r=0;r<e.appDataFields.CodeBlock.length;r++)for(var t=0;t<l.length;t++){var o=l[t].indexOf(e.appDataFields.CodeBlock.charAt(r));if(o!=-1){a+=l[t].charAt(25-o);break}o==-1&&t+1==l.length&&(a+=e.appDataFields.CodeBlock.charAt(r))}e.appDataFields.ReferenceBlock=a}e.pageTitle=function(){return e.appLang.atbash};var l=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ"];e.exeCipher=function(){o()},e.exeCipher()}]);