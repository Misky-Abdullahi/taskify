const { readTasksFromFile } = require("../utils/fileHandler")

exports.getTask = ( req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));




}