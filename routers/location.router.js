const express = require('express');
const locationController = require('../controllers/LocationController.js')

const router = express.Router();

router.get('/', locationController.getAll);
router.get('/:id', locationController.get);
router.post('/', locationController.insert);
router.put('/:id', locationController.update);
router.delete('/:id', locationController.delete);


module.exports = router;