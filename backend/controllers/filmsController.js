import Films from "../models/Films.js";

export const showFilms = async (req,res)=>{
    try{
        const document = await Films.find({}).populate("category");
        res.json(document);
    } catch (error){
        console.log(error);
    }   
};
export const searchFilms = async (req,res)=>{
    try{
        const { query } = req.params;
        const document = await Films.find({ title: new RegExp(query, 'i')})
        .populate({
            path: 'category',
            model: 'Categories'
        })
        
        res.json(document);
    }catch(error){
        console.log(error);
    }
}

export const showFilm = async (req,res)=>{
    const document = await Films.findById(req.params.idFilm);
    if(!document){
        res.json({mensaje: 'Esa pelicula no existe'})
    }
    res.json(document)
}

export const updateFilm = async (req,res)=>{
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body._id };
        const update =  req.body;
        const options = {new : true};

        const document = await Films.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
}