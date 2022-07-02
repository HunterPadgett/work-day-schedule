// get hour of day
var hourOfDay = parseInt(moment().hour());
// console.log(hourOfDay)
// varibles to help change text box colors
var nine = 9
var ten = 10
var eleven = 11
var twelve = 12
var onePm = 13
var twoPm = 14
var threePm = 15
var fourPm = 16
var fivePm = 17

// assign month, day year to id currentDay
function moDayYear() {
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
// console.log(today)
};

// change color of time blocks based on current hour 
function hourColor() {
  if (hourOfDay > nine) {
    $('#9').addClass('past');
  } else if (hourOfDay < nine) {
    $('#9').addClass('future');
  } else {
    $('#9').addClass('present');
  }

  if (hourOfDay > ten) {
    $('#10').addClass('past');
  } else if (hourOfDay < ten) {
    $('#10').addClass('future');
  } else {
    $('#10').addClass('present');
  }

  if (hourOfDay > eleven) {
    $('#11').addClass('past');
  } else if (hourOfDay < eleven) {
    $('#11').addClass('future');
  } else {
    $('#11').addClass('present');
  }

  if (hourOfDay > twelve) {
    $('#12').addClass('past');
  } else if (hourOfDay < twelve) {
    $('#12').addClass('future');
  } else {
    $('#12').addClass('present');
  }

  if (hourOfDay > onePm) {
    $('#13').addClass('past');
  } else if (hourOfDay < onePm) {
    $('#13').addClass('future');
  } else {
    $('#13').addClass('present');
  }

  if (hourOfDay > twoPm) {
    $('#14').addClass('past');
  } else if (hourOfDay < twoPm) {
    $('#14').addClass('future');
  } else {
    $('#14').addClass('present');
  }

  if (hourOfDay > threePm) {
    $('#15').addClass('past');
  } else if (hourOfDay < threePm) {
    $('#15').addClass('future');
  } else {
    $('#15').addClass('present');
  }

  if (hourOfDay > fourPm) {
    $('#16').addClass('past');
  } else if (hourOfDay < fourPm) {
    $('#16').addClass('future');
  } else {
    $('#16').addClass('present');
  }

  if (hourOfDay > fivePm) {
    $('#17').addClass('past');
  } else if (hourOfDay < fivePm) {
    $('#17').addClass('future');
  } else {
    $('#17').addClass('present');
  }
};


setInterval(hourColor, 1000);
setInterval(moDayYear, 1000);




















