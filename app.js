'use strict';

var hours = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.avgSimCookies = [];
  this.total = 0;

  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };
  this.eachHrSales = function() {
    for (var i = 0; i < hours.length; i++) {
      var hrSales = Math.ceil(this.randCust() * this.avgCookies);
      this.avgSimCookies.push(hrSales);
      }
    };

  this.cookieTable = function () {
      var table = document.getElementById('salesTable');
      var firstRow = document.createElement('tr');
      table.appendChild(firstRow);

      var storeData = document.createElement('td');
      storeData.innerText = this.name;
      firstRow.appendChild(storeData);

      this.avgSimCookies = [];
      this.eachHrSales();
      for (var j = 0; j < this.avgSimCookies.length; j++) {
        var salesData = document.createElement('td');
        salesData.innerText = this.avgSimCookies[j];
        firstRow.appendChild(salesData);
          }
        };
      };

var pike = new CookieStore ('1st and Pike', 23, 65, 6.3);
var seatac = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var seattlectr = new CookieStore ('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore ('Alki', 2, 16, 4.6);

var headerMaker = function () {
  var headerRow = document.getElementById('timeRow');
  var timeRow = document.createElement('tr');
  headerRow.appendChild(timeRow);

  for (var i = 0; i < hours.length; i++) {
    var timeData = document.createElement('td')
    timeData.innerText = hours[i];
    headerRow.appendChild(timeData);
    }
  };
headerMaker();

var footerMaker = function () {
  var footerRow = document.getElementById('totalRow');
  var totalData = document.createElement('tr');
  footerRow.appendChild(totalData);

  var firstCell = document.createElement('td');
  firstCell.innerText = 'Totals';
  footerRow.appendChild(firstCell);
};
footerMaker();

pike.cookieTable();
seatac.cookieTable();
seattlectr.cookieTable();
capitol.cookieTable();
alki.cookieTable();


function harvestAndMakeNewStore(event) {
  event.preventDefault();
  var name = this.elements['name'].value;
  var minCust = parseInt(this.elements['minCust'].value);
  var maxCust = parseInt(this.elements['maxCust'].value);
  var avgCookies = parseFloat(this.elements['avgCookies'].value);
  var newStore = new CookieStore(name, minCust, maxCust, avgCookies);
  console.log(newStore.name);
  newStore.cookieTable();
};

var form = document.getElementById('theForm');
form.addEventListener('submit',harvestAndMakeNewStore);
form.reset();
