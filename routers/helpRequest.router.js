const express = require('express');
const helpRequestController = require('../controllers/HelpRequestController.js')

const router = express.Router();

router.get('/', helpRequestController.getAll);
router.get('/filtering', helpRequestController.filtering);
router.get('/IVolunteer', helpRequestController.IVolunteer);
router.get('/:id', helpRequestController.get);
router.post('/NewVolunteer/', helpRequestController.NewVolunteer);
router.post('/', helpRequestController.insert);
router.put('/:id', helpRequestController.update);
router.delete('/:id', helpRequestController.delete);

module.exports = router;