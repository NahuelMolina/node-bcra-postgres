const { Pool } = require('pg');

const config = {
	port:'6969',
	host:'localhost',
	user:'postgres',
    password:'69superContra'
};

const pool = new Pool(config);


exports.Painter = class Painter {
	constructor(date,amount,id){
	    this.date = date;
        this.id = id;
        this.amount = amount;
	}
	
	putData(){
            let nameDBase = 'numerous_data';
        	
            if(id=0){
                pool.query('CrEATE table data (id int , date varchar , amount float);');
            }
            
            pool.query(`insert into data values (${this.id},${this.data},${this.amount});`);

	}
}


