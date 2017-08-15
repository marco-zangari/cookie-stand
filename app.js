'use strict';

var firstPike = {
name: '1st and Pike',
minNumCust: 23,
maxNumCust: 65,
avgNumCookiesCust: 6.3,
avgSimCookies: [],
hoursOp: ['6 AM: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
  firstPikeRandCust: function() {
  return Math.floor(Math.random() * (this.maxNumCust - this.minNumCust) + this.minNumCust);
  },

  firstPikeEachHrSales: function () {
  for (var i = 0; i < 15; i++) {
    var firstPikeEachHrSales = Math.ceil(this.firstPikeRandCust() * this.avgNumCookiesCust);
    this.avgSimCookies.push(firstPikeEachHrSales);
   console.log(firstPikeEachHrSales);
  }
  }
};
firstPike.firstPikeEachHrSales();
firstPike.avgSimCookies;

var SeaTac = {
name: 'SeaTac Airport',
minNumCust: 3,
maxNumCust: 24,
avgNumCookiesCust: 1.2,
avgSimCookies: [],
};
SeaTac.Math.floor(Math.random() * (24 - 3) + 3);


var SeattleCenter = {
name: 'Seattle Center',
minNumCust: 11,
maxNumCust: 38,
avgNumCookiesCust: 3.7

};
SeattleCenter.Math.floor(Math.random() * (38 - 11) + 11);


var CapHill = {
name: 'Capitol Hill',
minNumCust: 20,
maxNumCust: 38,
avgNumCookiesCust: 2.3,

};
CapHill.Math.floor(Math.random() * (38 - 20) + 20);


var Alki = {
name: 'Alki',
minNumCust: 2,
maxNumCust: 16,
avgNumCookiesCust: 4.6,

};
Alki.Math.floor(Math.random() * (16 - 2) + 2);
