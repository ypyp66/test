const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const cors = require('cors');
const connection = mysql.createConnection(dbconfig);
​
var app = express();
​
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
​
// app.post('/users', function(req, res){ // /users는 모듈이름
//     // var user = {
//     //     id : "first",
//     //     password : "second"
//     // };
//     // connection.query('insert into users (id,password) values (?,?)', 
//     // [req.body.name, req.body.surname], (err, rows) => {
//     //     if (error) throw error;
//     //     console.log(rows);
//     // });
//     console.log("req.body", req.body);
//     res.send(req.body);
// });
​
app.get('/users', (req, res) => { // localhost:3000/users 일 때
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
});
​
app.get('/', (req, res) =>{ //기본 주소
    res.send("Hello World!");
})
app.listen(app.get('port'), function() {
    console.log('listening on port '+app.get('port'));
});