/*
Author: Judy H. Nguyen
*/
var drink  = [];

function saveName(){
  var name = document.getElementById("username").value;
  drink.push("Name: " + name);
  setCookie("drinkInfo", drink);
  setCookie("uName", name);
}

function displayDrink(){
  var order = getCookie("drinkInfo");
  var details = order.split(",");
  var yourDrink = new Drink(details[0], details[1], details[2], details[3], details[4], details[5]);
  document.getElementById("display").innerHTML = yourDrink.display();
}

function Drink(name, size, roast, temp, sugar, cream){
  this.name = name;
  this.size = size;
  this.roast = roast;
  this.temp = temp;
  this.sugar = sugar;
  this.cream = cream;

  this.display = function(){
    var drinkOrder = getCookie("drinkInfo");
    var details = drinkOrder.split(",");
    var order = ""
    for(var i = 0; i<=details.length-1; i++){
        order = order + details[i] + "<br/>";
    }
    return order;
  };
}

function smallCoffee(){
  var drinkA = getCookie("drinkInfo");
  drink.push(drinkA);
  drink.push("Size: small");
  setCookie("drinkInfo", drink);
  document.getElementById("pair1").innerHTML = "You have chosen the small";
  //document.getElementById("drinkSize").innerHTML = "<br/>" + "Want a different size?" + "<br/>" + "<button onclick=\"changeSize()\">yes!</button>";

}

function medCoffee(){
  var drinkA = getCookie("drinkInfo");
  drink.push(drinkA);
  drink.push("Size: medium");
  setCookie("drinkInfo", drink);
  document.getElementById("pair1").innerHTML = "You have chosen the medium";
  //document.getElementById("drinkSize").innerHTML = "<br/>" + "Want a different size?" + "<br/>" + "<button onclick=\"changeSize()\">yes!</button>";
}

function lrgCoffee(){
  var drinkA = getCookie("drinkInfo");
  drink.push(drinkA);
  drink.push("Size: large");
  setCookie("drinkInfo", drink);
  document.getElementById("pair1").innerHTML = "You have chosen the large";
  //document.getElementById("drinkSize").innerHTML = "<br/>" + "Want a different size?" + "<br/>" + "<button onclick=\"changeSize()\">yes!</button>";
}

/*function changeSize(){
  document.getElementById("pair1").innerHTML =   "<br>" + "<img src=\"http://orig13.deviantart.net/3c1f/f/2016/343/5/6/small_coffee_by_mocchu-dar2o1x.gif\" alt=\"small\">" +
    "<img src=\"http://orig03.deviantart.net/048c/f/2016/343/9/d/med_coffee_by_mocchu-dar2o1y.gif\" alt=\"med\">" +
    "<img src=\"http://orig07.deviantart.net/2cb4/f/2016/343/3/3/large_coffee_by_mocchu-dar2o20.gif\" alt=\"large\">" +
    "<br>" +
    "<button onclick=\"smallCoffee()\">small</button>" +
    "<button onclick=\"medCoffee()\">medium</button>" +
    "<button onclick=\"lrgCoffee()\">large</button>" +
    "<br>" +
    "<br>";
    document.getElementById("drinkSize").innerHTML = "";
}
*/

function addRoast(){
  var drinkA = getCookie("drinkInfo");
  drink = drinkA.split(",");
  var roast = "Roast: " + document.getElementById("roast").value;
  drink.push(roast);
  setCookie("drinkInfo", drink);
}

function addTemp() {
  var drinkA = getCookie("drinkInfo");
  drink = drinkA.split(",");
  var temp = "Temp: " + document.getElementById("temp").value;
  drink.push(temp);
  setCookie("drinkInfo", drink);
}

function addSugar() {
  var drinkA = getCookie("drinkInfo");
  drink = drinkA.split(",");
  var sugar = "Sugar: " + document.getElementById("sugar").value;
  drink.push(sugar);
  setCookie("drinkInfo", drink);
}

function addCream() {
  var drinkA = getCookie("drinkInfo");
  drink = drinkA.split(",");
  var cream = "Cream: " + document.getElementById("cream").value;
  drink.push(cream);
  setCookie("drinkInfo", drink);
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
