const express = require('express');
const router = express.Router();
const controllerTest = require('../controller/controllerTest');

router.get('/', controllerTest.getData);
router.post('/', controllerTest.createData);
router.patch('/', controllerTest.updateData)
router.delete('/', controllerTest.deleteData)

module.exports = router;