const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // host for connection
    port: 3306, // default port for mysql is 3306
    user: 'prajakta', // username of the mysql connection
    password: 'Praj@2000' ,// password of the mysql connection
    database:'company'
});

connection.connect(function (err) {
    if(err) throw err;
    else{
        console.log("Connection created with Mysql successfully\n");
    }
 });


let sql="insert into dept values (10,'Accounting','Seoul'),\
        (20,'Research','Daegu'),\
        (30,'Sales','Seoul'),\
        (40,'Operations','Incheon'),\
        (50,'HR','Busan'),\
        (60,'Manufacturing','Daejeon');"
connection.query(sql, function(err, rows){ 
    if(err) throw err;
    console.log("Inserted rows in dept table\n");
});
sql=" insert into employee values\
(7099,'Smith','President',null,'1980-11-17',10000.00,10),\
(7199,'Sandy','Manager',7099,'1991-05-11',3750.00,10),\
(7299,'Rachel','Manager',7099,'1980-06-10',2700.00,20),\
(7399,'Ethan','Manager',7099,'1996-05-11',4700.00,30),\
(7499,'Julie','Manager',7099,'1985-08-15',2750.00,null);";
connection.query(sql, function(err, rows){ 
    if(err) throw err;
    console.log("Inserted rows in employee table\n");
});

sql="update employee set Hire_date='1979-12-26' where EmpNo=7299;"
connection.query(sql, function(err, rows){ 
    if(err) throw err;
    console.log("updated row in employee table\n");
});

connection.end();