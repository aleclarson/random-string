var alphabet, exports, lowercase, numerical, uppercase;

numerical = "0123456789";

lowercase = "abcdefghijklmnopqrstuvwxyz";

uppercase = lowercase.toUpperCase();

alphabet = numerical + lowercase + uppercase;

module.exports = exports = function(length) {
  var i, j, ref, string;
  if (length == null) {
    length = 8;
  }
  string = "";
  for (i = j = 0, ref = length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    string += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return string;
};

//# sourceMappingURL=../../map/src/index.map
