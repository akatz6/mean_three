var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/login.html'
	 })
	.when('/logged_in',{
		templateUrl: 'angular/partials/welcome.html'
	})
	.when('/logout',{
		templateUrl: 'angular/partials/login.html'
	})
	.when('/newAppointment',{
		templateUrl: 'angular/partials/newAppointment.html'
	})
	.otherwise({
		templateUrl: 'angular/partials/login.html'
	})
});