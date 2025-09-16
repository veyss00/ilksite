const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Render, PORT değişkenini atıyor

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
