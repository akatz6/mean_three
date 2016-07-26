app.controller('newAppointmentController', ['$scope', '$location', 'newAppointmentFactory',function($scope, $location, newAppointmentFactory){
	$scope.available = false;
	$scope.checkDate = function(){
		var temp = new Date()
		var appointment = new Date($scope.dates);
		if(appointment <= new Date()){
			$scope.okDate = true
		} else {
			$scope.okDate = false
		}
	}
	$scope.addAppointment = function(){
		if(!$scope.complain){
			$scope.mins = true
		}else{
			$scope.mins = false
		}
		var appointment = new Date($scope.dates);
		var object = {time:$scope.time, date:appointment, complain:$scope.complain}
		console.log(object)
			newAppointmentFactory.setAppointment(object, function(returned_data){
				if(returned_data.data.toMany){
					$scope.toManyAppointment = true
				} else {
					$scope.toManyAppointment = false
					$location.url('/logged_in')
				}
			})

	}

	$scope.cancel = function(){
		$location.url('/logged_in')
	}
}]);