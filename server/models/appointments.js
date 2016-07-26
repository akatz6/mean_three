var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AppointmentSchema = new mongoose.Schema({
	date: {"type":Date, required:true},
	time: {"type":String, required:true},
	patient: {"type":String, required:true},
	complain: {"type":String, required:true, minlength:10},
	_perDay : [{ type: Schema.Types.ObjectId, ref: 'PerDay' }]
})

var PerDaySchema = new mongoose.Schema({
	date: {"type":Date, required:true},
	patients: {"type":Number, required:true},
})

var Appointment  = mongoose.model('Appointment', AppointmentSchema);
var PerDay = mongoose.model('PerDay', PerDaySchema);