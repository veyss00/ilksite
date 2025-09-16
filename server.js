const express = require("express");
const path = require("path");
const app = express();

// Render otomatik PORT atıyor, yoksa yerel 3000
const PORT = process.env.PORT || 3000;

// public klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, "public")));

// Tüm diğer isteklerde index.html’i göster (SPA için)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
