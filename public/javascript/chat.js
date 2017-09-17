//var app = angular.module('chatApp',['ngMaterial']);
var app = angular.module('chatApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
  //  .accentPalette('orange');
   // .dark();
});


app.controller('chatController',function($scope, $sce){

	$scope.messages = [{sender:"BOT",text:"Hey Kentucky! Want to know what's trending? Guin It!"}];
		/*{sender:"USER",text:"hello Guins !",time:"12:30"},
		{sender:"BOT",text:"Want to know what's trending?",time:"12:31"},
		{sender:"USER",text:"Yeah !",time:"12:31"},
		{sender:"BOT",text:"Then Guin it !",time:"12:32"}];*/



	var  exampleSocket =  new  WebSocket("wss://swiftcode-guinbot.herokuapp.com/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
        var jsonData = JSON.parse(event.data);
        jsonData.time = new Date().toLocaleTimeString();
        $scope.messages.push(jsonData);
        $scope.$apply(); 
        console.log(jsonData);    

    };
		
	$scope.sendMessage = function () {    
        exampleSocket.send("News on "+$scope.userMessage);
        $scope.userMessage = "";
       //$('#message-pane').scrollTop($('#message-pane').scrollHeight);
       $("#message-pane").animate({scrollTop: $('#message-pane').prop("scrollHeight") }, 1000);
	};
	$scope.trust = $sce.trustAsHtml;

});