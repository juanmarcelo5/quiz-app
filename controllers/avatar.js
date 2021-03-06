const { request, response } = require('express')
const { sortArray } = require('../helpers/sortArray')
const Usuario = require('../models/avatar')

const avatarGet = async (req = request, res = response) => {
	try {
		let avatars = await Usuario.find()
		avatars = avatars.sort(sortArray)

		res.status(200).json({
			data: avatars,
		})
	} catch (error) {
		res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}

/*Agrega un nuevo avatar  */
const avatarPost = async (req = request, res = response) => {
	try {
		const body = req.body
		const usuario = new Usuario(body)
		await usuario.save()
		res.status(200).json({
			msg: 'Avatar registrado correctamente',
			usuario,
		})
	} catch (error) {
		if (error.code === 11000) {
			res.status(400).json({
				msg: 'El avatar ya existe, favor ingresar otro!',
			})
		}
		res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}

/*Actualizar el puntaje*/
const avatarScoreUpdate = async (req = request, res = response) => {
	try {
		const { avatar: avatarUpdate, score } = req.body
		const avatars = await Usuario.findOneAndUpdate(
			{ avatar: avatarUpdate },
			{ score: score }
		)
		res.status(200).json({
			data: avatars,
		})
	} catch (error) {
		res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}

module.exports = {
	avatarPost,
	avatarGet,
	avatarScoreUpdate,
}
