app.factory('welcomeFactory', ['$http', function($http){
	function WelcomeFactory(){
		this.get_name =  function(callback){
			$http.get('/get_name').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.getAll = function(callback){
			$http.get('/appointments').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.delete_entry = function(id, callback){
			var object = {id:id}
			$http.post('/delete_entry', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new WelcomeFactory();
}]);