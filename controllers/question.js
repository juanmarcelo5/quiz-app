const { request, response } = require('express');
const question = require('../models/question');
const Question = require('../models/question');

const questionGet = async (req = request, res = response )=> {
  try {
    const questions = await Question.find()
    res.status(200).json({
      data:questions,
      ok:true
    })
  } catch (error) {
    console.log(error);
    throw new Error('Ocurrio un error inesperado')
  }
  
}
const questionPost = async (req = request, res = response )=> {
  const body = req.body;
  console.log(body);
  const PREGUNTA = new Question({title:body.title,answer:body.answer})
  await PREGUNTA.save()

  res.status(200).json({
    msg:'Etrando a question post',
    PREGUNTA
  })
}


module.exports = {
  questionGet,
  questionPost
}