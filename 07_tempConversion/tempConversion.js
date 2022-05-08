const ftoc = function(fah) {
  let cel = (fah - 32) * (5/9) * 10;
  return Math.round(cel) / 10;
};

const ctof = function(cel) {
  let fah = (cel * (9/5) + 32) * 10;
  return Math.round(fah) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
