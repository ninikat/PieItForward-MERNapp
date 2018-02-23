'use strict';


var mongoose = require('mongoose'),
  Pizza = mongoose.model('Pizza');

exports.list_all_slices = function(req, res) {
  Pizza.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_a_slice = function(req, res) {
  var new_slice = new Pizza(req.body);
  new_slice.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

export const deleteSlice = (req,res) => {
  Pizza.findByIdAndRemove(req.params.id, (err,slice) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':' redeemed successfully'});
  })
}
