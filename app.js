'use strict';

var hours = ['6 am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function CookieStore(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.avgSimCookies = [];

  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };
  this.eachHrSales = function() {
    this.avgSimCookies = [];
    for (var i = 0; i < hours.length; i++) {
      var hrSales = Math.ceil(this.randCust() * this.avgCookies);
      this.avgSimCookies.push(hrSales);
      }
    };
  this.salesReport = function () {
    this.eachHrSales();
    for (var i = 0; i < hours.length; i++) {
      var salesList = document.getElementById('list');
      var listItems = document.createElement('li');
      listItems.innerText = hours[i] + this.avgSimCookies[i] + ' cookies.';
      salesList.appendChild(listItems);
    };
  }
}

var pike = new CookieStore ('1st and Pike', 23, 65, 6.3);
var seatac = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var seattlectr = new CookieStore ('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore ('Alki', 2, 16, 4.6);

pike.salesReport();
seatac.salesReport();
seattlectr.salesReport();
capitol.salesReport();
alki.salesReport();
