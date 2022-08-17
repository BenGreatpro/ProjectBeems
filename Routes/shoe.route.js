const express = require('express');
const router = express.Router();
const { createShoe, findOneShoe, findAll, updateShoe, deleteAllShoe, deleteShoe,  } = require('../Controllers/shoe.controllers');

router.post('/', createShoe);

router.get('/:id', findOneShoe);

router.get('/', findAll);

router.put('/:id', updateShoe)

router.delete('/:id', deleteShoe)

router.delete('/', deleteAllShoe)

module.exports = router;