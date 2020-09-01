class Contribution {
  constructor(id, title, idAuthor, rating) {
    var id = id
    var title = title
    var idAuthor = idAuthor
    var rating = rating

    this.setAuthor = function (id) {
      idAuthor = id
    }
    this.getIdAuthor = function () {
      return idAuthor
    }
  }
}

module.exports = Contribution