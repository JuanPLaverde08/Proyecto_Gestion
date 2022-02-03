const mongoose = require ('mongoose');
require ('dotenv').config({ path: 'variables.env'});

const conectarBD= async () =>{

    try{

        await mongoose.connect('mongodb+srv://juanlahe:12345@cluster0.i2cyz.mongodb.net/Barberia')
        console.log('BD Conectada');

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports= conectarBD