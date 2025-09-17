const express = require("express");
const path = require("path");
const path = requrire("express");
const app = express();

const PORT = process.env.PORT //3000;

appçuse(express.static(path.join(__dirname, "puvlix")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// En alta ekliyoruz (en son route)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
