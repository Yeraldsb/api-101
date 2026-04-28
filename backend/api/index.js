const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


// Ruta del archivo books.json
const DATA_FILE = path.join(__dirname, "..", "data", "books.json");

// Función para leer los libros desde el archivo
function loadBooks() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
}

// GET /books → obtener todos los libros
app.get("/books", (req, res) => {
  const books = loadBooks();
  res.status(200).json(books);
});


// Inica servidor
app.listen(PORT, () => {
    console.log(` API Learning 101 server running on port ${PORT}`);
    console.log(` Local: http://localhost:${PORT}`);
    console.log(`📚 Documentation: https://github.com/Yeraldsb/api-101`);
  });
