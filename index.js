const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 8080;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'college',
    password: 'XXXXX'
});

app.get('/',(req,res)=>{
    res.render('login.ejs');
})

app.post('/',(req,res)=>{
    const {email, password} = req.body;
    const q = `select * from register where email = '${email}' and password = '${password}'`;
    
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            if(Array.isArray(result) && result.length === 0){
                res.send('<h1>You are not registered, Please register first..!!</h1>');
            }else{
                res.redirect('/record');
            }
           
        })
    }catch(err){
        console.log(err);
    }
})

app.get('/register',(req,res)=>{
    res.render('register.ejs');
})

app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    const id = uuidv4();
    const q = `insert into register (id,name,email,password) values ('${id}', '${name}', '${email}', '${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
        
            res.redirect('/');
        })
    }catch(err){
        console.log(err);
    }
})

app.get('/record',(req,res)=>{
    const q = 'select * from students';
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            res.render('home.ejs', {result});
        })
    }catch(err){
        console.log(err);
    }
})

app.get('/add',(req,res)=>{
    res.render('addStudentRecord.ejs');
})

app.patch('/add',(req,res)=>{
    let {id,name,studentClass,subject,marks} = req.body;
    id = parseInt(id);
    studentClass = parseInt(studentClass);
    marks = parseInt(marks);
    // const val = [id,name,studentClass,subject,marks];
    // console.log(val);
    const q = `insert into students (id,name,class,subject,marks) values (${id},'${name}',${studentClass},'${subject}',${marks})`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.redirect('/record');
        })
    }catch(err){
        console.log(err);
    }

})

app.get('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const q = `select * from students where id = ${id}`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            res.render('edit.ejs', {result});
        })
    }catch(err){
        console.log(err);
    }
});

app.patch('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const {name,studentClass,subject,marks} = req.body;
    const q = `update students set name = '${name}', class = ${studentClass} , subject = '${subject}', marks=${marks} where id = ${id}`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            res.redirect('/record');
        })
    }catch(err){
        console.log(err);
    }


});

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    
    const q = `delete from students where id= ${id}`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // const msg = 'Successfully Deleted from the Database';
            res.redirect('/record');
        })
    }catch(err){
        console.log(err);
    }
})



app.listen(port,()=>{
    console.log(`App Listening on port ${port}`);
});
