angular.module("CipherX.controllers").controller("QwertCoodCtrl",["$scope","$rootScope","$stateParams","cfpLoadingBar",function(e,a,o,t){function r(){var e="";if(a.qwertCoodData.qwertCood_direct)for(var o=0;o<a.appDataFields.CodeBlock.length;o++)e:for(var t=0;t<l.length;t++)for(var r=0;r<l[t].length;r++){if(l[t][r]==a.appDataFields.CodeBlock[o]||l[t][r]==a.appDataFields.CodeBlock[o].toUpperCase()){e+=t+""+r+" ";break e}r+1==l[t].length&&t+1==l.length&&(e+=a.appDataFields.CodeBlock[o])}else for(var n=a.appDataFields.CodeBlock.split(" "),t=0;t<n.length;t++)if(2!=n[t].length||isNaN(n[t]))e+=n[t]+" ";else{var p=parseInt(n[t][0]),i=parseInt(n[t][1]);e+=p>=0&&i>=0&&p<l.length&&i<l[0].length?l[p][i]+" ":n[t]+" "}a.appDataFields.ReferenceBlock=e}a.pageTitle=function(){return a.appLang.qwertCood};var l=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];a.exeCipher=function(){r()},a.exeCipher()}]);