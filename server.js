const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require('path');
const Spawn = require('child_process').spawn;
const PORT = process.env.PORT || 5000;
const pythonProcess = Spawn('python',["test.py", 'Farhan']);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

pythonProcess.stdout.on('data', (data) => console.log(data.toString()))
io.on("connection", socket => {
  console.log("New connection !!!", socket.id);
});

pythonProcess.stderr.on('error', error => console.log(error))

server.listen(PORT, () => console.log("Connected @ " + PORT));
