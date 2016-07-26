app.controller('welcomeController', ['$scope', '$location', 'welcomeFactory',function($scope, $location, welcomeFactory){
	index = function(){
		welcomeFactory.get_name(function(returned_data){
			$scope.name = returned_data.data.user
		})
	}
	appointments =function(){
		welcomeFactory.getAll(function(returned_data){
			$scope.allAppointments = returned_data.data.appointments
		})
	}
	index();
	appointments();
	$scope.logout = function(){
		$location.url('/logout')
	}
	$scope.newAppointment = function(){
		$location.url('/newAppointment')
	}
	$scope.delete = function(id, date){
		var appointment = new Date(date);
		welcomeFactory.delete_entry(id, function(returned_data){
			console.log(returned_data)
			appointments();
		})
	}
}]);