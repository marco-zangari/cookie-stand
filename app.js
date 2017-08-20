'use strict';

var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiesCust: 6.3,
  avgSimCookies: [],
  hoursOp: ['6 am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  total: 0,

  randCust: function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  eachHrSales: function () {
    this.avgSimCookies = [];
    this.total = 0;
  for (var i = 0; i < this.hoursOp.length; i++) {
    var hrSales = Math.ceil(this.randCust() * this.avgCookiesCust);
    this.avgSimCookies.push(hrSales);
    this.total += hrSales;
    }
  },
  salesReport: function () {
   this.eachHrSales();
   for (var i = 0; i < this.hoursOp.length; i++) {
   var sales = document.getElementById('salesPike');
   var storeSales = document.createElement('ul');
   storeSales.innerText = this.hoursOp[i] + this.avgSimCookies[i] + ' cookies';
   sales.appendChild(storeSales);
      }
    var dailyTotal = document.createElement('ul')
    dailyTotal.innerText = 'Total: ' + this.total + ' cookies';
    sales.appendChild(dailyTotal);
  },
};

firstPike.salesReport();

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookiesCust: 1.2,
  avgSimCookies: [],
  hoursOp: ['6 am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  total: 0,

randCust: function (){
  return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
eachHrSales: function () {
  this.avgSimCookies = [];
  this.total = 0;
  for (var i = 0; i < this.hoursOp.length; i++) {
  var hrSales = Math.floor(this.randCust() * this.avgCookiesCust);
  this.avgSimCookies.push(hrSales);
  this.total += hrSales;
    }
  },
salesReport: function () {
  this.eachHrSales();
  for (var i = 0; i < this.hoursOp.length; i++) {
  var sales = document.getElementById('salesSeaTac');
  var storeSales = document.createElement('ul');
  storeSales.innerText = this.hoursOp[i] + this.avgSimCookies[i] + ' cookies';
  sales.appendChild(storeSales);
    }
  var dailyTotal = document.createElement('ul');
  dailyTotal.innerText = 'Total: ' + this.total + ' cookies';
  sales.appendChild(dailyTotal);
  },
};

seaTac.salesReport();

var SeattleCenter = {
name: 'Seattle Center',
minNumCust: 11,
maxNumCust: 38,
avgNumCookiesCust: 3.7

};

var CapHill = {
name: 'Capitol Hill',
minNumCust: 20,
maxNumCust: 38,
avgNumCookiesCust: 2.3,

};

var Alki = {
name: 'Alki',
minNumCust: 2,
maxNumCust: 16,
avgNumCookiesCust: 4.6,
};
