// get hour of day
var hourOfDay = parseInt(moment().hour());
// console.log(hourOfDay)
// varibles to help change text box colors
var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var onePm = 13;
var twoPm = 14;
var threePm = 15;
var fourPm = 16;
var fivePm = 17;

// assign month, day year to id currentDay
function moDayYear() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY"));
  // console.log(today)
}

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
}

// storing 9am text
function nineText() {
  var input9 = document.getElementById('9');
  var output9 = document.getElementById('9');
  var saveBtn9 = document.getElementById('9-btn');

  saveBtn9.addEventListener("click", store9);

  output9.textContent = localStorage.getItem("9content");
  input9.value = localStorage.getItem("9content");

  function store9() {
    localStorage.setItem("9content", input9.value);

    output9.textContent = input9.value;
  }
}
// storing 10am text
function tenText() {
  var input10 = document.getElementById('10');
  var output10 = document.getElementById('10');
  var saveBtn10 = document.getElementById('10btn');

  saveBtn10.addEventListener("click", store10);
  output10.textContent = localStorage.getItem("10content");
  input10.value = localStorage.getItem("10content");

  function store10() {
    localStorage.setItem("10content", input10.value);
    output10.textContent = input10.value;
  }
}
//  storing 11am text
function elevenText() {
  var input11 = document.getElementById('11');
  var output11 = document.getElementById('11');
  var saveBtn11 = document.getElementById('11btn');

  saveBtn11.addEventListener("click", store11);
  output11.textContent = localStorage.getItem("11content");
  input11.value = localStorage.getItem("11content");

  function store11() {
    localStorage.setItem("11content", input11.value);
    output11.textContent = input11.value;
  }
}
// storing 12pm text
function twelveText() {
  var input12 = document.getElementById('12');
  var output12 = document.getElementById('12');
  var saveBtn12 = document.getElementById('12btn');

  saveBtn12.addEventListener("click", store12);
  output12.textContent = localStorage.getItem("12content");
  input12.value = localStorage.getItem("12content");

  function store12() {
    localStorage.setItem("12content", input12.value);
    output12.textContent = input12.value;
  }
}
// storing 1pm text
function thirteenText() {
  var input13 = document.getElementById('13');
  var output13 = document.getElementById('13');
  var saveBtn13 = document.getElementById('13btn');

  saveBtn13.addEventListener("click", store13);
  output13.textContent = localStorage.getItem("13content");
  input13.value = localStorage.getItem("13content");

  function store13() {
    localStorage.setItem("13content", input13.value);
    output13.textContent = input13.value;
  }
}
// storing 2pm text
function fourteenText() {
  var input14 = document.getElementById('14');
  var output14 = document.getElementById('14');
  var saveBtn14 = document.getElementById('14btn');

  saveBtn14.addEventListener("click", store14);
  output14.textContent = localStorage.getItem("14content");
  input14.value = localStorage.getItem("14content");

  function store14() {
    localStorage.setItem("14content", input14.value);
    output14.textContent = input14.value;
  }
}
// storing 3pm text
function fifteenText() {
  var input15 = document.getElementById('15');
  var output15 = document.getElementById('15');
  var saveBtn15 = document.getElementById('15btn');

  saveBtn15.addEventListener("click", store15);
  output15.textContent = localStorage.getItem("15content");
  input15.value = localStorage.getItem("15content");

  function store15() {
    localStorage.setItem("15content", input15.value);
    output15.textContent = input15.value;
  }
}
// storing 4pm text
function sixteenText() {
  var input16 = document.getElementById('16');
  var output16 = document.getElementById('16');
  var saveBtn16 = document.getElementById('16btn');

  saveBtn16.addEventListener("click", store16);
  output16.textContent = localStorage.getItem("16content");
  input16.value = localStorage.getItem("16content");

  function store16() {
    localStorage.setItem("16content", input16.value);
    output16.textContent = input16.value;
  }
}
// storing 5pm text
function seventeenText() {
  var input17 = document.getElementById('17');
  var output17 = document.getElementById('17');
  var saveBtn17 = document.getElementById('17btn');

  saveBtn17.addEventListener("click", store17);
  output17.textContent = localStorage.getItem("17content");
  input11.value = localStorage.getItem("17content");

  function store17() {
    localStorage.setItem("17content", input17.value);
    output17.textContent = input17.value;
  }
}


setInterval(hourColor, 1000);
setInterval(moDayYear, 1000);
nineText();
tenText();
elevenText();
twelveText();
thirteenText();
fourteenText();
fifteenText();
sixteenText();
seventeenText();
textStore();












