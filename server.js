const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Erlaubt Anfragen von überall
app.use(cors());
app.use(express.json());

// Speichere Daten im Arbeitsspeicher (für Demo)
let newsItems = [
  {
    id: 1,
    title: "pimme",
    content: "REGEN",
    date: "01.01.2023"
  }
];

// Hole alle Nachrichten
app.get('/api/news', (req, res) => {
  res.json(newsItems);
});

// Erstelle neue Nachricht
app.post('/api/news', (req, res) => {
  const newItem = {
    id: newsItems.length + 1,
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleDateString('de-DE')
  };
  
  newsItems.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
