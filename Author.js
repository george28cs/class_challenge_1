class Author {
  constructor(id, name, university, email, maxRating, numberOfPublications, averageRate) {
    var id = id
    var name = name
    var university = university
    var email = email
    var maxRating = maxRating
    var numberOfPublications = numberOfPublications
    var averageRate = averageRate
    
    this.checkRate = function () {
      return maxRating
    }
    this.calcAverage = function () {
      return maxRating / numberOfPublications
    }
  }
}

module.exports = Author