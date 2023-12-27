const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Adicione esta linha

const app = express();

// Permitir todas as origens por enquanto (você pode configurar isso de forma mais segura em produção)
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

connection.connect();

app.get('/dados', (req, res) => {
  const query = 'SELECT * FROM test';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
