angular.module('shouldIApp.autoComplete', [])

.controller('Controller', function($scope, AutoCompleteService) {
   $scope.searchArtist = function(){
     var artistName = $scope.data;
     AutoCompleteService.getResults(artistName, function(answer){
       $scope.answer = answer;	
     });
   }
})
.directive('autoComplete', function($timeout, AutoCompleteService) {	
 return function(scope, element, attrs) {
           AutoCompleteService.getSource(function(artists){
			        scope.artists = artists;
	            element.autocomplete({
	              source: scope.artists
	            });
		   
		   });
        };
});

