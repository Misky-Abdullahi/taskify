const {IncomingForm } = require('formidable');
const { readTasksFromFile } = require("../utils/fileHandler");
// const IncomingForm = require('formidable/Formidable');

exports.getTask = ( req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
}

exports.createTask = (req, res) => {
const form = new IncomingForm();
form.parse(req, (err, field, files)=>{
    if(err)
    {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            message: 'Error passing form' 
        }));
        return;
    }
    const task =readTasksFromFile ()
    const newTask = {
        id:Date.now(),
        title: field.title,
        description: field.description || '',
        status: field.status || 'pending',
        image : field.image? `/uploads/${files.image.name}`: null,

    }
    task.push(newTask);
    writeTasksToFile(task);
    if(files.image){
        copyFileSync (files.image.path, path, path.join(__dirname, '../uploads'.files.image.name) );
        res.end(JSON.stringify(newTask));
    }


    

})

}

exports.updateTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'not yet implement'
    }))
}

exports.deleteTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'not yet implement'
    }))
}
