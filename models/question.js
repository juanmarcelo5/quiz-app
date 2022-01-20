const {Schema,model} = require('mongoose')
const QuestionSchema = Schema({
  title:String,
  answer: { type: Array, default:[] }


})

module.exports = model('Question',QuestionSchema)