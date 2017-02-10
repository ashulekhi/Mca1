

var main = angular.module('main',['ui.router' ,'jkuri.datepicker']);

main.config(['$stateProvider', '$urlRouterProvider' ,'$locationProvider' ,function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    // $urlRouterProvider.otherwise('/home');
    
    $stateProvider

     
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: 'login/',
            templateUrl: 'login/login.html'
        })

        .state('login.success', {
            url: 'login/success',
            templateUrl: 'login/loginsuccess.html'
        })

        $locationProvider.html5Mode(true);
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
        
}]);


