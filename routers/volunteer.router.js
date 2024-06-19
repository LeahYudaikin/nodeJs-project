const express = require('express');
const volunteerController = require('../controllers/VolunteerController.js')

const router = express.Router();

router.get('/', volunteerController.getAll);
router.get('/:id', volunteerController.get);
router.post('/', volunteerController.insert);
router.put('/:id', volunteerController.update);
router.delete('/:id', volunteerController.delete);


module.exports = router;