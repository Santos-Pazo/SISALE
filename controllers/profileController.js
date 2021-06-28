let db = require("../database/models");


let op = db.Sequelize.Op;

let profileController = {
    nombre: req.usuario.nombreusuario,
    telefono: req.usuario.telefono,
    fecha_nacimiento: req.usuario.fecha_nacimiento, }
    
module.exports = profileController;