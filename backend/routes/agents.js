const express = require('express');
const router = express.Router();
const { setupShift, getShifts } = require('../controllers/agentController');

router.post('/shift', setupShift);
router.get('/shift', getShifts);

module.exports = router;