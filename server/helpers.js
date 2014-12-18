'use strict';

var helpers = {};

helpers.averageScore = function(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total/arr.length;
};

helpers.generateAnswer = function(rating, rule){
  console.log('inside helpers.generateAnswer');
  return rule(rating);
  // if (rule(rating)){ return true; }
  // else {return false}
};

module.exports = helpers;
