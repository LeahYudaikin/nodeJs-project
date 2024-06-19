const express = require('express');
const priorityController = require('../controllers/PriorityController.js')

const router = express.Router();

router.get('/', priorityController.getAll);
router.get('/:id', priorityController.get);
router.post('/', priorityController.insert);
router.put('/:id', priorityController.update);
router.delete('/:id', priorityController.delete);


module.exports = router;