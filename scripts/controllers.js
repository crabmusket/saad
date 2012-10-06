'use strict';

function SaadQuery($scope) {
}
SaadQuery.$inject = ['$scope'];

function SaadBrowser($scope, $http) {
  $http
    .get('https://spreadsheets.google.com/feeds/list/0AruEbfhtGsHgdFZHNVI1dmxvajlxYkN5SmdsTWZyenc/od6/public/values?alt=json-in-script')
    .success(function(data) {
        var i = data.indexOf('{');
        var json = data.substr(i, data.length - i - 2);
        $scope.data = JSON.parse(json).feed.entry;
        console.log($scope.data);
      });
}
SaadBrowser.$inject = ['$scope', '$http'];

function SaadDetailView($scope, $routeParams) {
}
SaadDetailView.$inject = ['$scope', '$routeParams'];
