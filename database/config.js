const mongoose = require('mongoose')

const dbConection = async () => {
	try {
		await mongoose.connect(process.env.MONGOCNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log('base de datos online')
	} catch (error) {
		console.log(error)
		throw new Error('Error en la base de datos')
	}
}

module.exports = {
	dbConection,
}
