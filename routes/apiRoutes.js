const fs = require("fs");
const uuid = require("uuid");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", function (req, res) {
    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    data = req.body;
    data.id = uuid.v4();
    note.push(data);
    fs.writeFileSync("./db/db.json", JSON.stringify(note));
    res.json(note);
  });

  app.delete("/api/notes", function (req, res) {
    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    

    res.json();
  });
};
