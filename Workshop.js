const Contribution = require("./Contribution")

class Workshop extends Contribution {
  constructor(id, title, idAuthor, rating, maxCapacity, duration) {
    super(id, title, idAuthor, rating)
    var maxCapacity = maxCapacity
    var duration = duration

    this.getData = function () {
      return maxCapacity
    }
  }
}

module.exports = Workshop