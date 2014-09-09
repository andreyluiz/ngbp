angular.module( 'ngBoilerplate.register', [
  'ui.router',
  'ui.validate'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'register', {
    url: '/register',
    views: {
      "main": {
        controller: 'RegisterCtrl',
        templateUrl: 'register/register.tpl.html'
      }
    },
    data:{ pageTitle: 'Register' }
  });
})
.controller( 'RegisterCtrl', function HomeController( $scope ) {
  $scope.required = function(field) {
    return $scope.form[field].$error.required && $scope.form[field].$dirty;
  };

  $scope.match = function(field) {
    return $scope.form[field].$error.validator && $scope.form[field].$dirty;
  };

  $scope.validEmail = function(field) {
    return $scope.form[field].$error.email && $scope.form[field].$dirty; 
  };

  $scope.length = function(field) {
    return ($scope.form[field].$error.minlength || $scope.form[field].$error.maxlength) && $scope.form[field].$dirty; 
  };
});