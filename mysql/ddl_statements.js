const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // host for connection
    port: 3306, // default port for mysql is 3306
    user: 'prajakta', // username of the mysql connection
    password: 'Praj@2000' ,// password of the mysql connection
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("Connection created with Mysql successfully\n");
 });

let sql='create database company;';
connection.query(sql, (err,result) => {
    if(err) throw err;
    console.log('Database created\n');
  });

sql='use company;'

connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Company Database in use\n");
});

sql='create table dept(DeptNo int primary key,\
    DeptName varchar(20),\
    DeptLoc varchar(20));'

connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Department Table created\n");
});

sql='create table employee(EmpNo int primary key,\
    EmpName varchar(30),Job varchar(20),\
    Mgr int,Hire_date date,\
    Salary decimal(6,2),DeptNo int,\
    foreign key(Mgr) references employee(EmpNo),\
    foreign key(DeptNo) references dept(DeptNo));'

connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Employee Table created\n");
});

sql='alter table employee modify Salary decimal(8,2);'
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Alter statement for employee table\n");
});

sql='desc dept';
connection.query(sql, function(err, rows){ 
    if(err) throw err;
    let str="Field\tType\tNull\tKey\tDefault\n";
    console.log("\nDept table \n"+str);
    for(let i=0;i<rows.length;i++){
        str=rows[i].Field+"\t"+rows[i].Type+"\t"+rows[i].Null+"\t"+rows[i].Key+"\t"+rows[i].Default+"\n";
        console.log(str);
    }
});
sql='desc employee';
connection.query(sql, function(err, rows){ 
    if(err) throw err;
    let str="Field\tType\tNull\tKey\tDefault\n";
    console.log("\nEmployee table \n"+str);
    for(let i=0;i<rows.length;i++){
        str=rows[i].Field+"\t"+rows[i].Type+"\t"+rows[i].Null+"\t"+rows[i].Key+"\t"+rows[i].Default+"\n";
        console.log(str);
    }
});
connection.end()