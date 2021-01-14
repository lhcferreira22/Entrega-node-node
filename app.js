const express = require("express");
const app = express();

const cors = require('cors')


app.use( cors() )


app.get("/",  (req, res, next) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '123456',
        database: 'fseletro'
    }) ; 

    connection.query("select * from produtos",  (error, result)  => {
             res.json(result) 
    })
});

app.listen(1910, () => {
  console.log("O servidor subiu na porta 1910");
});
