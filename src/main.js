const http = require('https');
const req = require('request');
const key = require('../config/config-bcra');
const { myFuncis } = require('./funcis');

const TOKEN = key.llave;
const myheader = {
    'Accept':'text/json',
    'Authorization': 'Bearer '+ TOKEN
}
const url = 'https://api.estadisticasbcra.com/base_usd';
option = {
    url:url,
    headers:myheader
}

req.get(option, (err,res,data) => {
    const {statusCode} = res;
    if(statusCode == '200'){
        let spike = [];
        try{
            console.log("Status: " + statusCode);
            spike = JSON.parse(data);
            let fisrt = spike.d;
            let second = spike.j;
            
            new myFuncis(first,second);
            
        }catch(err){
            console.log(err);
        }
    }
    res.end();
    
});

