import mongoose from "mongoose";
import Categories from "./Categories.js";
const Schema = mongoose.Schema;

const filmsSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    synapsis:{
        type: String,
        required: true
    },
    release:{
        type: Date,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'Categories'
    }
},
{versionKey: false}
);

const Films = mongoose.model('Films', filmsSchema);
export default Films;