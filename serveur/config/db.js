const mongoose=require('mongoose');
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.9tqtz.mongodb.net/markeni`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
    .then(()=>console.log("connect to mongoDB"))
    .catch((err)=>console.log("failed to connect to mongoDB",err))