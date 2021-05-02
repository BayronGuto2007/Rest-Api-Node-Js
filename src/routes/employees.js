const e = require('express');
const { request } = require('express');
const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../datebase')

router.get('/',(req, res)=>{
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }

    })
});


router.get('/:id', (req,res)=>{
    //req.params.id
    const {id} = req.params;
    //console.log(id)
    //Consulta
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?',[id], (err, rows, fields) =>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req,res)=>{
    const {id,nombre,salario} = req.body;

    const query = `
        CALL employeeAgregarOEditar(?,?,?);
    `;
    mysqlConnection.query(query,[id, nombre, salario], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Empleado Guardado'});
        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req,res)=>{
    const { nombre,salario } =  req.body;
    const {id} = req.params;
    const query = 'Call employeeAgregarOEditar(?,?,?)';
    mysqlConnection.query(query,[id,nombre,salario], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Empleado Actualziado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Empleado Eliminado'});
        }else{
            console.log(err);
        } 
    });
});


module.exports = router;