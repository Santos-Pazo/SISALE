let db = require("../database/models");


let op = db.Sequelize.Op;

let profileEditController = {
    update: function(req, res) {

        if(req.method == 'GET'){
            return res.render('profile-edit',{
                nombre: req.usuario.nombreusuario,
                telefono: req.usuario.telefono,
                fecha_nacimiento: req.usuario.fecha_nacimiento,     

            })
        }

        if(req.method == 'POST') {
             let usuarios = {
                nombre: req.usuario.nombreusuario,
                telefono: req.usuario.telefono,
                fecha_nacimiento: req.usuario.fecha_nacimiento,   
            }



            db.Usuario.update(usuarios, {
              
                where: {id: req.session.user.id}

            })
            .then(() =>{
                req.flash('Editado exitosamente')

                return res.redirect('/')
            })
        }
    }
}
module.exports = profileEditController