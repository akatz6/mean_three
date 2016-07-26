var mongoose = require('mongoose'),
Appointment = mongoose.model('Appointment'),
PerDay = mongoose.model('PerDay');
var name = ""

module.exports = (function(){
  return {
  	save_name:function(req, res){
  		req.session.user = req.body.user
  		res.json({'user': req.session.user})
  	}, //end of save name methord
  	return_name:function(req, res){
  		console.log(req.session.user)
  		res.json({'user': req.session.user})
  	}, //end of return name method
   appointment:function(req, res){
    var string = req.body.date.toString();
    var resp = string.split("T");
    console.log(resp[0])
      appointment = new Appointment({
        date: resp[0],
        time: req.body.time,
        complain: req.body.complain,
        patient: req.session.user 
      })
    appointment.save(function(err){
      if(err){
        res.json({'error': true})
      }
      else {
        PerDay.findOne({date:resp[0]}, function(err, found){
          if(err){
            res.json({'error': true})
          }else if(found){
            if(found.patients >= 3){
              console.log(found)
              res.json({'toMany': true})
            }else {
            found.patients += 1
            found.save(function(err){
              if(err){
                res.json({'error': true})
              }else {
                res.json({'success': true})
              }
            })
            }
          }
          else {
            perDay = new PerDay({
              date: resp[0],
              patients: 1
            })
            perDay.save(function(err){
              if(err){
                res.json({'error': true})
              }else {
               res.json({'success': true}) 
              }
            })
          }
        })
      }
    })
   }, // end of apoointment method 
   appointments:function(req, res){
    Appointment.find({date:{"$gte":new Date()}}, function(err, appointments){
      if(err){
        res.json({'error': true})
      }else {
        res.json({appointments: appointments})
      }
    })
   },// end of appointments method
   delete_entry:function(req, res){
    console.log(req.body)
      Appointment.remove({_id:req.body.id}, function(err){
        if(err){
          res.json({'error': true})
        }else {
          res.json({'success': true}) 
        }
      })
   }


















  }
})();