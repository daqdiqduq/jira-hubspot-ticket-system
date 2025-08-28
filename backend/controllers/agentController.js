function setupShift(req, res) {
  res.send('Shift setup');
}

function getShifts(req, res) {
  res.send(['Shift1', 'Shift2']);
}

module.exports = { setupShift, getShifts };