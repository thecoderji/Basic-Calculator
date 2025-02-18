"use strict";

var input = document.getElementsByTagName("input");
console.log(input);

var operand1 = "";
var operand2 = "";
var operator = "";

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var decimal = document.getElementById("decimal");
var equal = document.getElementById("equal");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var remainder = document.getElementById("remainder");
var sign = document.getElementById("sign");
var ac = document.getElementById("ac");
var erase = document.getElementById("erase");

btn0.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn0.value;
	}
	else input[0].value += btn0.value;
});
btn1.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn1.value;
	}
	else input[0].value += btn1.value;
});
btn2.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn2.value;
	}
	else input[0].value += btn2.value;
});
btn3.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn3.value;
	}
	else input[0].value += btn3.value;
});
btn4.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn4.value;
	}
	else input[0].value += btn4.value;
});
btn5.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn5.value;
	}
	else input[0].value += btn5.value;
});
btn6.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn6.value;
	}
	else input[0].value += btn6.value;
});
btn7.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn7.value;
	}
	else input[0].value += btn7.value;
});
btn8.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn8.value;
	}
	else input[0].value += btn8.value;
});
btn9.addEventListener("click", function(event){
	if(input[0].value=='+' || input[0].value=='-' || input[0].value=='x' || input[0].value=='/' || input[0].value=='%'){
		input[0].value = "";
	}
	if(input[0].value==='0'){
		input[0].value = btn9.value;
	}
	else input[0].value += btn9.value;
});

var decimalCount = 0;
decimal.addEventListener("click", function(event){
	if(decimalCount==0){
		if(input[0].value==""){
			input[0].value = "0" + decimal.value;
		}
		else input[0].value += decimal.value;
		decimalCount++;
	}
	else{
		alert("Invalid Input, A number can't have 2 decimal points");
	}
});

ac.addEventListener("click", function(){
	input[0].value="";
	decimalCount = 0;
	operand1 = "";
	operand2 = "";
});

sign.addEventListener("click", function(){
	if(input[0].value=='0' || input[0].value=="");
	else if(input[0].value[0]==='-'){
		input[0].value = input[0].value.slice(1);
	}
	else input[0].value = "-" + input[0].value;
	
});

erase.addEventListener("click", function() {
	if(input[0].value[input[0].value.length-1]=="."){
		decimalCount= 0;
	}
	input[0].value = input[0].value.substring(0,input[0].value.length-1);
});

add.addEventListener("click", function(){
	if(input[0].value ==""){
		alert("Enter a value");
	}
	else{
		if(input[0].value != "-" || input[0].value != "*" || input[0].value != "/" || input[0].value != "%" ){
			operand1 = input[0].value;
		}
		operator = "+";
		input[0].value = operator;
	}
});

subtract.addEventListener("click", function(){
	if(input[0].value ==""){
		alert("Enter a value");
	}
	else{
		if(input[0].value != "-" || input[0].value != "*" || input[0].value != "/" || input[0].value != "%" ){
			operand1 = input[0].value;
		}
		operator = "-";
		input[0].value = operator;
	}
});

divide.addEventListener("click", function(){
	if(input[0].value ==""){
		alert("Enter a value");
	}
	else{
		if(input[0].value != "-" || input[0].value != "*" || input[0].value != "/" || input[0].value != "%" ){
			operand1 = input[0].value;
		}
		operator = "/";
		input[0].value = operator;
	}
});
remainder.addEventListener("click", function(){
	if(input[0].value ==""){
		alert("Enter a value");
	}
	else{
		if(input[0].value != "-" || input[0].value != "*" || input[0].value != "/" || input[0].value != "%" ){
			operand1 = input[0].value;
		}
		operator = "%";
		input[0].value = operator;
	}
});
multiply.addEventListener("click", function(){
	if(input[0].value ==""){
		alert("Enter a value");
	}
	else{
		if(input[0].value != "-" || input[0].value != "*" || input[0].value != "/" || input[0].value != "%" ){
			operand1 = input[0].value;
		}
		operator = "*";
		input[0].value = "x";
	}
});

equal.addEventListener("click", function(){
	operand2 = input[0].value;
	if(operand1==""){
		alert("Enter operands");
	}
	else if(operator=="/" && operand2=="0"){
		input[0].value = "Error Division By Zero";
	}
	else if(input[0].value =="+" || input[0].value =="-" || input[0].value =="*" || input[0].value =="/" || input[0].value =="%"){
		alert("First enter another operand");
	}
	else input[0].value = eval(operand1 + operator + operand2);

});
