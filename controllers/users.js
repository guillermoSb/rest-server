const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const queryParams = req.query;
    res.json({
        ok: true,
        msg: 'get API - Controller',
        queryParams
    });
};

const putUser = (req, res) => {
    const { id } = req.params;
    res.status(400).json({
        ok: true,
        msg: 'put API',
        id
    });
};

const postUser = (req, res) => {
    const { email, password } = req.body;
    res.status(201).json({
        ok: true,
        email,
        password
    });
};

const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API'
    });
};

module.exports = {
    getUsers,
    putUser,
    postUser,
    deleteUser
};