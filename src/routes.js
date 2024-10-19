const express = require('express');
const router = express.Router();

const LivroController = require('./controllers/livroController');

router.get('/livros', LivroController.buscarTodos);

module.exports = router;