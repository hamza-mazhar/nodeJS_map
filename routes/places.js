var express = require('express');
var Place = require('../models').Place;
var router = express.Router();

// middleware
var checkIDInput = function (req, res, next) {
  //console.log('Check ID input');
  if(isNaN(req.params.id)) {
    //console.log('Invalid ID supplied');
    res.status(400).json('Invalid ID supplied');
  } else {
    next();
  }
};
var checkIDExist = function (req, res, next) {
  //console.log('Check ID exist');
  Place.count({ where: { id: req.params.id } }).then(count => {
    if (count != 0) {
      next();
    } else {
      //console.log('Book not found');
      res.status(400).json('Place not found');
    }
  });
};

router.get('/', function(req, res){
  //console.log('Getting all books');
  Place.findAll().then(place => {
    res.status(200).json(place);
  });
});

router.post('/', function(req, res){
  console.log("++++++++here received data romfront end",req.body)
  Place.create({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    name: req.body.name,
    image_url: req.body.image_url,
  }).then(place => {
    /*console.log(book.get({
        plain: true
    }));*/
    res.status(200).json(place);
  }).error(err => {
    res.status(405).json('Error has occured');
  });
});

router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
  //console.log('Get book by id');
  Place.findById(req.params.id).then(place => {
    //console.log(book);
    res.status(200).json(place);
  });
});

router.put('/:id', [checkIDInput, checkIDExist], function(req, res){
  //console.log('Update book by id');
  Place.update({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    name: req.body.name,
    image_url: req.body.image_url,
  },{
    where: { id: req.params.id }
  }).then(result => {
    res.status(200).json(result);
  });
});

router.delete('/:id', [checkIDInput, checkIDExist], function(req, res){
  //console.log('Delete book by id');
  Place.destroy({
    where: { id: req.params.id }
  }).then(result => {
    res.status(200).json(result);
  });
});

module.exports = router;
