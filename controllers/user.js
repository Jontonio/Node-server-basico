const { response, request } = require('express')

const usuarioGet = (req = request, res = response)=>{

    const { page=1, limit=1 } = req.query;

    res.json({
        dato:'get API controller',
        page,
        limit
    });
};

const usuarioPost = (req, res = response)=>{
    const body = req.body;
    res.json({
        dato:'post API controller',
        body
    });
};

const usuarioPut = (req, res = response)=>{
    res.json({
        dato:'put API controller'
    });
};

const usuarioDelete = (req = request, res = response)=>{
    const id = req.params;
    res.json({
        dato:'delete API controller',
        id
    });
};

const usuarioPatch = (req, res = response)=>{
    res.json({
        dato:'patch API'
    });
};

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch
}