
numerical = "0123456789"
lowercase = "abcdefghijklmnopqrstuvwxyz"
uppercase = lowercase.toUpperCase()
alphabet = numerical + lowercase + uppercase

module.exports = exports = (length = 8) ->
  string = ""
  string += alphabet[ Math.floor Math.random() * alphabet.length] for i in [0...length]
  string
