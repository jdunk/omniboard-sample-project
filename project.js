angular.module('project', ['ngRoute', 'firebase']).
  value('fbURL', 'https://popping-fire-2063.firebaseio.com/').
  factory('Projects', function($firebase, fbURL) {
    var fbRef = new Firebase(fbURL);
    return $firebase(fbRef).$asArray();
  }).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  }).
  filter('searchTermHighlight', function($sce) {
    return function(text, phrase) {
      if (phrase)
      {
        text = text.replace(
          new RegExp('('+phrase+')', 'gi'),
          '<span class="searchTermHighlight">$1</span>');
      }
      
      return $sce.trustAsHtml(text)
    }
  }).
  filter('intToStars', function($sce) {
    return function(int) {
      if (int == undefined)
          return '';

      var str = '';

      for (var i=1; i<=5; i++)
      {
        str += '<span class="icon-star';

        if (int < i)
            str += '-empty';

        str += '"></span>';
      }

      return $sce.trustAsHtml(str);
    }
  });
 
function ListCtrl($scope, Projects) {
  $scope.projects = Projects;
}
 
function CreateCtrl($scope, $location, $timeout, Projects) {
  $scope.save = function() {
    Projects.$add($scope.project).then(function() {
      $location.path('/');
    });
  }
}
 
function EditCtrl($scope, $location, $routeParams, $firebase, fbURL) {
  var fbRef = new Firebase(fbURL + $routeParams.projectId);
  var sync = $firebase(fbRef);
  var syncObj = sync.$asObject();
  
  syncObj.$loaded().then(function() {
    syncObj.$bindTo($scope, 'project')
  })
  .then(function() {
    $scope.destroy = function() {
      sync.$remove().then(function() {
        $location.path('/');
      });
    };
    $scope.save = function() {
      syncObj.$save($scope.project).then(function() {
        $location.path('/');
      });
    };
  });
}