const { Pool } = require('pg');

const config = {
	port:'6969',
	host:'localhost',
	user:'postgres',
    password:'69superContra',
    database:'bcra'
};

const pool = new Pool(config);
let i = 0;
exports.Painter = class Painter {
	constructor(date,amount,id){
	    this.date = date;
        this.id = id;
        this.amount = amount;
	}

	
	putData(){
        i++;    
        //let nameDBase = 'numerous_data';
        	
        //if(i == 0){
        
        //pool.query('create database bcra;');
        //pool.query('CrEATE table data (id int , date varchar , amount float);');
        
        //}else{
        console.log(`Iteration number:${i}`);
        console.log(`id:${this.id}, date:${this.date}, amount:${this.amount}`);
        pool.query(`insert into data_moified values ('${this.id}','${this.data}','${this.amount}');`);
        
        //}
	}
}


