'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.photoDetails = window.cs142models.photoOfUserModel($routeParams.userId);
    $scope.userDetails = window.cs142models.userModel($routeParams.userId);
    console.log($scope.photoDetails);
    console.log('UserPhoto of ', $routeParams.userId);
    $scope.main.sectionHeader = 'Photos by ' + $scope.userDetails.first_name + ' ' + $scope.userDetails.last_name;

    console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
       window.cs142models.photoOfUserModel(userId));

  }]);
