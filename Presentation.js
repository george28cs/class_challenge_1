const Contribution = require("./Contribution")

class Presentation extends Contribution {
  constructor(id, title, idAuthor, rating, publicationDate, mainTheme) {
    super(id, title, idAuthor, rating)
    var publicationDate = publicationDate
    var mainTheme = mainTheme
  }
}

module.exports = Presentation