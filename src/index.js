module.exports = function check(str, bracketsConfig) {
  let open = [], close = [];
  if (str.length % 2 !== 0) return false;

  open = bracketsConfig.flat().map((item, i) => {
    if (i % 2 == 0) return item;
  }).join("");

  close = bracketsConfig.flat().map((item, i) => {
    if (i % 2 != 0) return item;
  }).join("");

  let str2 = "";
  for (let i = 0; i < open.length; i++) {
    (!isNaN(open[i])) ? str2 += "(" : str2 += "(\\";
    str2 += open[i];
    (!isNaN(open[i])) ? str2 += ")(" : str2 += ")(\\";
    str2 += close[i];
    if (i != open.length - 1)
      str2 += ")|";
    else
      str2 += ")";
  }

  let regexp = new RegExp(str2);

  while (str.search(regexp) != -1) {
    str = str.replace(regexp, '');
  }
  return (str.length == 0) ? true : false;
};