function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return 'Price to be positive value';
  } else if (watch >= 0 || phone >= 0 || laptop >= 0) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
  } else {
    return 'Quantity to be in number value';
  }
}
