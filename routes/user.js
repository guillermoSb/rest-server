const { Router } = require('express');
const { getUsers, putUser, deleteUser, postUser } = require('../controllers/users');

const router = Router();


router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', postUser);
router.delete('/:id', deleteUser);


module.exports = router;