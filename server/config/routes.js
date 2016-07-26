var appointments = require('../controllers/appointments.js');

module.exports = function(app){
	app.post('/name', appointments.save_name)
	app.get('/get_name', appointments.return_name)
	app.post('/appointment', appointments.appointment)
	app.get('/appointments', appointments.appointments)
	app.post('/delete_entry', appointments.delete_entry)
}