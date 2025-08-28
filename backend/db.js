const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ticket_system'
});

function connectDB() {
  connection.connect(err => {
    if (err) throw err;
    console.log('Connected to SQL database');
  });
}

module.exports = { connectDB, connection };