
const { Router } = require('express');
const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users');


const router = new Router();

router.get('/', usersGET);

router.put('/:id', usersPUT);

router.post('/', usersPOST);

router.delete('/', usersDELETE);

router.patch('/', usersPATCH);


module.exports = router;