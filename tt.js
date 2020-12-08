angular.module('App', []).controller('CrudCtrl', ['$scope',
	function($scope) {
	  $scope.musics = [
	      {
	        name : "Lovely",
            artist : "Billie Eillie",
            price : "700",
	        editable : false
	      },
	      {
	        name : "You Belong With Me",
            artist : "Taylor Swift",
            price : "820",
	        editable : false
	      }
	    ];
	 
	 $scope.entity = {}
	    
	 $scope.edit = function(index){
	   $scope.entity = $scope.musics[index];
       $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.musics.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.musics[index].editable = false;
	   
	 }
	    
	 $scope.add = function(){
	   $scope.musics.push({
	      name : "",
        artist : "",
        price : "",
        editable : true
	   })
	 }
	}
]);