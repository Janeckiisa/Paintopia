module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },

    async pagLoginGet(req, res) {
        res.render('../views/login');
    },

    async pagCadastroGet(req, res) {
        res.render('../views/cadastro');
    },

    async pagCriacaoGet(req, res){
        res.render('../views/criacao');
    },

    async pagRepositorioGet(req, res){
        res.render('../views/repositorio');
    },
    
}