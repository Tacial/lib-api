const livroService = require('../services/livroService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let livros = await livroService.buscarTodos();

        for (let i in livros){
            json.result.push({
                codigo: livros[i].codigo,
                descricao: livros[i].titulo,
            });
        }
        res.json(json);
    }
}