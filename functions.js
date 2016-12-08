/*
Author: Judy H. Nguyen
*/
var scoreGivenCC = false;
var scoreGivenA2 = false;
var scoreGivenA3 = false;

var scoreGivenP1 = false;
var scoreGivenP2 = false;
var scoreGivenP3 = false;

var scoreGivenC1 = false;
var scoreGivenC2 = false;
var scoreGivenC3 = false;

function saveUserDetails(){
  var name = document.getElementById("username").value;
  var age = document.getElementById("age").value;
  var month = document.getElementById("month").value;
  month = month.toLowerCase();
  if(month=="january"){
    month = 1;
  }
  else if (month=="february") {
    month = 2;
  }
  else if (month=="march") {
    month = 3;
  }
  else if (month=="april") {
    month = 4;
  }
  else if (month=="may") {
    month = 5;
  }
  else if (month=="june") {
    month = 6;
  }
  else if (month=="july") {
    month = 7;
  }
  else if (month=="august") {
    month = 8;
  }
  else if (month=="september") {
    month = 9;
  }
  else if (month=="october") {
    month = 10;
  }
  else if (month=="november") {
    month = 11;
  }
  else if (month=="december") {
    month = 12;
  }
  setCookie("uName", name);
  setCookie("age", age);
  setCookie("month", month);
}

/*
replaces the first example with the user input cookies
*/
function replace(){
  var name = getCookie("uName");
  var age = getCookie("age");
  var month = getCookie("month");
  if(month==1){
    month = "January";
  }
  else if (month==2) {
    month = "February";
  }
  else if (month==3) {
    month = "March";
  }
  else if (month==4) {
    month = "April";
  }
  else if (month==5) {
    month = May;
  }
  else if (month==6) {
    month = "June";
  }
  else if (month==7) {
    month = "July";
  }
  else if (month==8) {
    month = "August";
  }
  else if (month==9) {
    month = "September";
  }
  else if (month==10) {
    month = "October";
  }
  else if (month==11) {
    month = "November";
  }
  else if (month=12) {
    month = "December";
  }
  document.getElementById("nameA").innerHTML=name;
  document.getElementById("ageA").innerHTML=age;
  document.getElementById("monthA").innerHTML=month;
}

/*
adds the length of name + (name length + age) + birth month + sum of all previous numbers
*/
function calculateCookie(){
  var score = 0;
  var userInput = document.getElementById("a1").value;
  userInput = userInput.toString();

  var name = getCookie("uName");
  console.log(name);
  var nameLength = name.length;
  console.log("name length: " + nameLength);
  var nameLSTR = nameLength.toString();
  var age = getCookie("age");
  console.log("age: " + age);
  var ageNameSum = Number(nameLength)+Number(age);
  console.log("sum of age and name: " + ageNameSum);
  var ansSTR = ageNameSum.toString();
  console.log("age+name sum in string: " + ansSTR);
  var month = getCookie("month");
  var monthStr = month.toString();
  var cookieSum = Number(nameLength)+Number(ageNameSum)+Number(month);
  var cookieStr = cookieSum.toString();
  var finalCS = nameLSTR+ansSTR+monthStr+cookieStr
  finalCS = finalCS.toString();
  console.log("final cookie string: " + finalCS);

  if(userInput == finalCS && scoreGivenCC==false){
    setCookie("scoreTotal", score);
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
    else{
      if(scoreGivenCC==true && userInput == finalAnswer){
        alert("You have already entered a value for this form.");
      }
      else{
        alert("Try again.");
    }
  }
}

/*
adds the length of name + (name length + age) + birth month + sum of all previous numbers
*/
function calculateA2(){
  var userInput = document.getElementById("a2").value;
  userInput = userInput.toString();

  var finalSum = 622230;
  if(userInput == finalSum && scoreGivenA2==false){
    var cookie = Number(getCookie("scoreTotal"));
    console.log(cookie);
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
  else{
    if(scoreGivenA2==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
}
}

/*
adds the length of name + (name length + age) + birth month + sum of all previous numbers
*/
function calculateA3(){
  var scoreGiven = false;
  var userInput = document.getElementById("a3").value;
  userInput = userInput.toString();

  var finalSum = 2451259;
  if(userInput == finalSum && scoreGivenA3==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
  else{
    if(scoreGivenA3==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
}
}

function calculateP1(){
  var scoreGiven = false;
  var userInput = document.getElementById("p1").value;
  userInput = userInput.toString();
  userInput = userInput.toUpperCase();

  var finalAnswer = "PG5S";
  finalAnswer = finalAnswer.toString();
  console.log(scoreGiven);
  if(userInput == finalAnswer && scoreGivenP1==false){
    var cookie = Number(getCookie("scoreTotal"));
    console.log(cookie);
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
  else{
    if(scoreGivenP1==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
  }
}

function calculateP2(){
  var scoreGiven = false;
  var userInput = document.getElementById("p2").value;
  userInput = userInput.toString();
  userInput = userInput.toUpperCase();

  var finalAnswer = "RG6S";
  finalAnswer = finalAnswer.toString();

  if(userInput == finalAnswer && scoreGivenP2==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
  else{
    if(scoreGivenP2==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
  }
}

function calculateP3(){
  var scoreGiven = false;
  var userInput = document.getElementById("p3").value;
  userInput = userInput.toString();
  userInput = userInput.toUpperCase();

  var finalAnswer = "YG4S";
  finalAnswer = finalAnswer.toString();

  if(userInput == finalAnswer && scoreGivenP3==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGiven=true;
  }
  else{
    if(scoreGivenP3==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
  }
}

//Validate function courtesy of K. Buffardi
function validateUser(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("username").value;
  if(isNaN(userEntered))
  {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
  else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Please enter a name without numbers.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
}

function validateAge(){
  var ageEntered = document.getElementById("age").value;
  if(isNaN(ageEntered)==false)
  {
    document.getElementById("ageError").innerHTML="";
    document.getElementById("ageError").classList.remove("hidden-message");
    document.getElementById("ageError").classList.add("shown-message");
  }
  else
  {
    document.getElementById("ageError").innerHTML="Please use numerical values.";
    document.getElementById("ageError").classList.remove("hidden-message");
    document.getElementById("ageError").classList.add("shown-message");
  }
}

function validateMonth(){
  var monthEntered = document.getElementById("month").value;

  if(isNaN(monthEntered))
  {
    document.getElementById("monthError").innerHTML="";
    document.getElementById("monthError").classList.remove("hidden-message");
    document.getElementById("monthError").classList.add("shown-message");
  }
  else
  {
    document.getElementById("monthError").innerHTML="Please enter a valid month.";
    document.getElementById("monthError").classList.remove("hidden-message");
    document.getElementById("monthError").classList.add("shown-message");
  }
}

function checkC1(){
  var userInput = document.getElementById("c1").value;
  var finalAnswer = 4;

  if(userInput == finalAnswer && scoreGivenC1==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGivenC1=true;
  }
  else{
    if(scoreGivenC1==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
    }
  }
}

function checkC2(){
  var userInput = document.getElementById("c2").value;

  var finalAnswer = 5;

  if(userInput == finalAnswer && scoreGivenC2==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGivenC2=true;
  }
  else{
    if(scoreGivenC1==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
}
}

function checkC3(){
  var userInput = document.getElementById("c3").value;

  var finalAnswer = 7;

  if(userInput == finalAnswer && scoreGivenC3==false){
    var cookie = Number(getCookie("scoreTotal"));
    cookie+=1;
    setCookie("scoreTotal", cookie);
    alert("Correct! You earned 1 point. \nYour total score is now " + getCookie("scoreTotal") + ".");
    scoreGivenC3=true;
  }
  else{
    if(scoreGivenC1==true && userInput == finalAnswer){
      alert("You have already entered a value for this form.");
    }
    else{
      alert("Try again.");
  }
}
}

function displayScore(){
  var score = Number(getCookie("scoreTotal"));
  console.log(score + "/9");
  var percentage = score/9;
  console.log(percentage);
  percentage = percentage.toFixed(2);
  console.log(percentage);
  percentage = percentage*100;
  document.getElementById("display").innerHTML = percentage;
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
