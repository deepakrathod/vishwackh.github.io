var app = angular.module('mylinks', []);

app.controller('linksContrl', function($scope,$http){


  $http.get('json/links.json')
    .then(function(result) {
    	console.log("data"+result.data);
        $scope.links = result.data;
    });	
 
});
// Unique Sort
// <li ng-repeat="item in list | unique : 'name'">{{item.name}}</li>
app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});