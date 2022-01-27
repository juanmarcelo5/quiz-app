const {Schema,model} = require('mongoose')

const UsuarioSchema = Schema({
  avatar:{
    type:String,
    unique:true,
    required:[true,'El avatar es obligatorio']
  }  

})


module.exports = model('Usuario',UsuarioSchema)