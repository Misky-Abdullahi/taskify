const taskRoutes = (req, res) =>{
if (req.metho === 'GET' ) {
    getTask(req, res);
} 
else if (req.metho === 'POST') {
    createTask(req, res)
} else if (req.metho === 'PATCH') {
    updateTask(req, res)
}else if (req.metho === 'DELETE') {
    deleteTask(req, res)
}else {
    res.writeHead(404 , 'Data not found' , {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
        message: "unknown method requird "
    }))
}
}
module.exports = taskRoutes;
