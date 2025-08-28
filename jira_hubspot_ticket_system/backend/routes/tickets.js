const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  createTicket, updateTicket, deleteTicket, commentOnTicket,
  assignTicket, autoAssignTicket, getTickets
} = require('../controllers/ticketController');

router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);
router.post('/:id/comment', upload.single('file'), commentOnTicket);
router.post('/:id/assign', assignTicket);
router.post('/auto-assign', autoAssignTicket);
router.get('/', getTickets);

module.exports = router;