const express = require('express'); 
const router = express.Router(); 

const UsuarioController = require('../controllers/usuario'); 

router.get('/usuario', UsuarioController.listarUsuarios); 
router.post('/usuario', UsuarioController.cadastrarUsuarios); 
router.patch('/usuario', UsuarioController.editarUsuarios); 
router.delete('/usuario', UsuarioController.apagarUsuarios); 


module.exports = router;