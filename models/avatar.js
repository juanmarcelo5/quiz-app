const {Schema,model} = require('mongoose')

const UsuarioSchema = Schema({
  avatar:{
    type:String,
    unique:true,
    required:[true,'El avatar es obligatorio']
  },
  score:{
    type:Number,
    default: 0 
  }  

})


module.exports = model('Usuario',UsuarioSchema)