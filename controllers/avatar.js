const { request,response } = require("express");
const Usuario = require('../models/avatar')

const avatarGet = async (req = request,res= response )=>{
  try {
    const avatars = await Usuario.find();

    res.status(200).json({
      data:avatars
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg:'Ocurrio un error inesperado'
    })
  }



}

const avatarPost = async (req = request,res= response )=>{
  try {
    const body = req.body 
    const usuario= new Usuario( body )
    await usuario.save();
    
    res.status(200).json({
      msg:'Avatar registrado correctamente',
      usuario
    })

  } catch (error) {
    console.log(error);
 
    res.json({
      msg:'Ocurrio un error inesperado'
    })
  }
    
}

module.exports = {
  avatarPost,
  avatarGet
}