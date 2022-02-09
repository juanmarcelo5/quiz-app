const { request, response } = require('express')
const Question = require('../models/question')

//Obtiene todas las preguntas
const questionGet = async (req = request, res = response) => {
	try {
		const questions = await Question.find()
		res.status(200).json({
			data: questions,
		})
	} catch (error) {
		res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}
const questionPost = async (req = request, res = response) => {
	const body = req.body
	const pregunta = new Question({ title: body.title, answer: body.answer })
	await pregunta.save()
	try {
		res.status(200).json({
			msg: 'Pregunta Registrada',
			pregunta,
		})
	} catch (error) {
		res.status(400).json({
			msg: 'Ocurrio un error inesperado',
		})
	}
}

module.exports = {
	questionGet,
	questionPost,
}
