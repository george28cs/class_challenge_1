const Author = require('./Author')
const Contribution = require('./Contribution')
const Presentation = require('./Presentation')
const Workshop = require('./Workshop')

const McAllen =  new Author("1bCkd2SNb12", "McAllen", "MIT", "author@email.com", 90, 9)
const jsPub = new Contribution(2, "Better Programming", "1bCkd2SNb12", 10)
const presentation_one = new Presentation(5, "Better Programming", "1bCkd2SNb12", 10, 2015, "JS")
const js_workshop = new Workshop(5, "Better Programming", "1bCkd2SNb56", 10, 60, "8 hours")