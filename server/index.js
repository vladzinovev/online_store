import express from 'express';
import dotenv from 'dotenv';
//require('dotenv')
dotenv.config();

const port = process.env.PORT || 5000;

//создали express приложение
const app = express();


//запускаем веб сервер на порте 4444
app.listen(port, (err)=>{
    if (err){
        return console.log(err);
    }
    console.log(`Server OK ${process.env.PORT}`);
})
