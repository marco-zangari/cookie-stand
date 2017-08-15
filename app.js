'use strict';

var hoursOp = ['6 AM: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

function CookieStore(name, minCust, maxCust, avgCookies, ) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.avgSimCookies = [];

  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
    };
  this.eachHrSales = function() {
    for (var i = 0; i < 14; i++) {
      var hrSales = Math.ceil(this.randCust() * this.avgCookies);
      this.avgSimCookies.push(Math.ceil(eachHrSales(i)))
      }
    };

  eachHrSales: function () {
    this.avgSimCookies = [];
  for (var i = 0; i < 2; i++) {
    var hrSales = Math.ceil(this.randCust() * this.avgNumCookiesCust);
    this.avgSimCookies.push(Math.ceil.(eachHrSales));
    console.log(eachHrSales);
    }
  },

  salesReport: function () {
    for (var i = 0; i < this.hoursOp.length; i++) {
    var pikeRandomSales = this.eachHrSales();
    this.avgSimCookies.push(this.hoursOp[i] + pikeRandomSales + ' cookies');
    console.log(this.eachHrSales());


    var listItems = document.create.Element('li');
    listItems.innerText = "Total: " + this.total + 'cookies';
    list.appendChild(listItems);

//    this.total+=pikeRandomSales;
    }
  },
};

firstPike.salesReport();

var salesReport = document.createElement('li');
firstPikeSalesReport.innerText = this.hoursOp[i] + this.avgSimCookies[i] + '.'; // <--- if you want to change the inner text
firstPikeSalesReport.appendChild(newLi);*/
console.log(firstPike.total);

var listFirstPike = document.getElementById('firstPikeSalesReport');
var listFirstPikeMerge = document.createElement('li');
firstPikeSalesReport.appendChild(listFirstPikeMerge);
