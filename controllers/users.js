const { response } = require('express');

const usersGET = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
    })
}


const usersPOST =  (req, res) => {

    const body = req.body;

    res.json({
        msg: 'put API - controller',
        body
    })
}


const usersPUT = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'post API - controller',
        id
    })
}


const usersDELETE = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    })
}

const usersPATCH = (req, res) => {
    res.json({
        msg: 'patch API - controller'
    })
}


module.exports = { 
    usersGET,
    usersPOST,
    usersPUT,
    usersDELETE,
    usersPATCH
}