import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import filmsRoutes from './routes/filmsRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cinema');

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());

app.use('/api/images', express.static('uploads'));

process.on('uncaughtException', (error)  => {
    console.log('Something terrible happend: ',  error);
    process.exit(1); // salir de la aplicación
  });
  
  process.on('unhandledRejection', (error, promise) => {
    console.log(' We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error );
  });

app.use("/", filmsRoutes);  
app.use("/", categoriesRoutes)
app.use("/", usersRoutes)
app.listen(8800, ()=>{
    console.log("Connected!");
})