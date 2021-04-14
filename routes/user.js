const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPatch, usuarioDelete, usuarioPut } = require('../controllers/user');

const router = Router();

// empoit get
router.get('/', usuarioGet );

// empoit post
router.post('/', usuarioPost );

// empoit put
router.put('/', usuarioPut )

// empoit delete
router.delete('/:id', usuarioDelete )

// empoit patch
router.patch('/', usuarioPatch )

// exportamos la variable router
module.exports = router;