import express from 'express';
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//создали express приложение
const app = express();


//запускаем веб сервер на порте 4444
app.listen(PORT, (err)=>{
    if (err){
        return console.log(err);
    }
    console.log(`Server OK ${PORT}`);
})