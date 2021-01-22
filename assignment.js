// problem solving-1 kilo to meter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return 'Kilometer to be positive value!';
  } else if (kilometer >= 0) {
    var meter = kilometer * 1000;
    return meter;
  } else {
    return 'Input only a positive valid number!';
  }
}

// problem solving-2 budget calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return 'Price to be positive value!';
  } else if (watch >= 0 || phone >= 0 || laptop >= 0) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
  } else {
    return 'Quantity to be in positive number value!';
  }
}

// problem solving-3 hotel cost
function hotelCost(days) {
  var cost = 0;
  if (days <= 10) {
    return days * 100;
  } else if (days <= 20) {
    var cost = 10 * 100;
    var remainingDays = days - 10;
    var restCost = remainingDays * 80;
    return cost + restCost;
  } else if (days >= 20) {
    var cost = 10 * 100;
    var restCost = 10 * 80;
    var restDays = days - 20;
    var newCost = restDays * 50;
    var totalCost = cost + restCost + newCost;
    return totalCost;
  } else {
    return 'Input number datatype!';
  }
}

// problem solving-4 to find largest elemet from an array
function megaFriend(longestName) {
  var element = 0;
  var longest;
  for (var i = 0; i < longestName.length; i++) {
    if (longestName[i].length > element) {
      var element = longestName[i].length;
      longest = longestName[i];
    }
  }
  return longest;
}
