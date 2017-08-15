'use strict';

var hours = ['6 AM: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

function CookieStore(name, minCust, maxCust, avgCookies, ) {
  this.name = '1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki';
  this.minCust = 23, 3, 11, 20, 2;
  this.maxCust = 65, 24, 38, 38, 16;
  this.avgCookies = 6.3, 1.2, 3.7, 2.3, 4.6;
  this.avgSimCookies = [];

  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
    };
  this.eachHrSales = function() {
    for (var i = 0; i < 14; i++) {
      var hrSales = Math.ceil(this.randCust() * this.avgCookies);
      this.avgSimCookies.push(Math.ceil(hrSales);
      }
    };
  this.salesReport = function () {
    for (var i = 0; i < hours.length; i++) {
    var randomSales = this.eachHrSales(i);
    this.avgSimCookies.push(this.hoursOp[i] + pikeRandomSales + ' cookies');
      }
    };
CookieStore.name
//call the functions!!!

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
