app.factory('newAppointmentFactory', ['$http', function($http){
	function NewAppointmentFactory(){
		this.setAppointment =  function(object, callback){
			$http.post('/appointment', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new NewAppointmentFactory();
}]);