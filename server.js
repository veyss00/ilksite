const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Public klasörünü statik olarak ayarlıyoruz
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Tüm diğer route’lar → index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
