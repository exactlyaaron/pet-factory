'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'image1.png', title: 'Pet Factory Node.JS'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg: 'image2.png', title: 'Pet Factory Node.JS'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg: 'image3.png', title: 'Pet Factory Node.JS'});
};
