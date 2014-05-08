
'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');

  pets.find().toArray((err, records)=>{
    res.render('pets/index', {pets: records, bg: 'image1.png', title: 'Pet Factory: Pets'});
  });

};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findOne({_id: _id}, (err, record)=>{
    res.render('pets/show', {pet: record, bg: 'image1.png', title: 'Pet Factory: Pets'});
  });
};

exports.new = (req, res)=>{
  res.render('pets/new', {bg: 'image3.png', title: 'Pet Factory Node.JS'});
};

exports.destroy = (req, res)=>{
  var _id = Mongo.ObjectID(req.params.id);
  var pets = global.nss.db.collection('pets');

  pets.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/pets');
  });
  console.log(req.params);
};

exports.create = (req, res)=>{
  var photo;

  switch(req.body.species){
  case 'Wolf':
    photo = 'wolf.jpg';
    break;
  case 'Kitten':
    photo = 'kitten.jpg';
    break;
  case 'Panda':
    photo = 'panda.jpg';
    break;
  }

  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, object)=>{
    res.redirect(`/pets/${object._id}`);
  });
};
