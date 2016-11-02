// ES6
var getPaymentHistory = function* (token) {
  var validate = function (token) {
    if (token === 111) {
      return true;
    } else {
      return false;
    }
  }

  var fetchHistory = function (year) {
    return `History for ${year} is ....`;
  }

  var nextInput = yield(validate(token));
  yield(fetchHistory(nextInput));
}

var token = 111;
var year = 2011;
var iterator = getPaymentHistory(token);
var isValid = iterator.next();
if (isValid.value) {
  var history = iterator.next(year);
  console.log(history);
}
