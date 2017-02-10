var express = require('express');

var localAuthFactory = require('express-local-auth');
var winston = require('winston');

var app=express();

console.log(__dirname+'./../public')

app.use(express.static(__dirname + '/../public'))


app.listen('4000' , function(){
	console.log('server started');
})