const req = require('request');
const key = require('./config/config-bcra');
const Painter = require('./db/dbase').Painter;

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

req.get(option, async (err,res,data) => {
    const {statusCode} = res;
    if(statusCode == '200'){
        let arary = [];
    
        try{
            console.log("Status: " + statusCode);
            array = JSON.parse(data);
            let lim = array.length;
            for(let id=0;id<lim;id++){

                let date = array[id].d;
                let amount = array[id].v.toString();

                let send = new Painter(date,amount,id);
                await send.putData();
            }

        }catch(err){
            console.log('An error occurs');
	        console.log(`Error -> ${err}`);	
	    }
    }
    
});

