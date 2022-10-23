const RegexPatterns = Object.freeze({
  alphanumeric: /^([A-Za-z0-9][-'\s]*){2,}$/,
  alphabetic: /^([A-Za-z][-'\s]*){2,}$/,
  address: /^([A-Za-z0-9,][-'\s]*){2,}$/,
  phone: /^(\+[0-9]{2,3}[0-9]{9})$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  url: /(?<=^|\s)(\w*-?\w*.[a-z]{2,}\S*)/,
  numeric: /^[0-9]*$/,
});

export default RegexPatterns;
