const mongoose = require("mongoose");
module.exports=()=>{
    const connection ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB,connection);
        console.log("Connected to database succesfully")
    }

catch(error){
    console/log(error);
    console.log("couldn't connect to database")
}
}