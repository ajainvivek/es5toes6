// ES5
var getPaymentHistory = function (year) {
  var fetchHistory = function (year) {
    return 'History for ' + year + ' is ....';
  }
  return fetchHistory(year);
}

var validate = function (token) {
  if (token === 111) {
    return true;
  } else {
    return false;
  }
}

var token = 111;
var year = 2011;
var isValid = validate(token);
if (isValid) {
  var history = getPaymentHistory(year);
  console.log(history);
}
