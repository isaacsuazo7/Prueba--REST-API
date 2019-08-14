'use strict'

const service = require('../services');

function isAuth(req, res, next){
    if(!req.headers.autorization){
        return res.status(403).send({message: 'No tienes autorizacion'})

    }
    const token = req.headers.autorization.split("")[1]
    
    ServiceWorkerMessageEvent.decodeToken(token)
    .then(response =>{
        req.user = response
        next()
    })
    .catch(response =>{
        res.status(response.status)
    })
}

module.exports = isAuth