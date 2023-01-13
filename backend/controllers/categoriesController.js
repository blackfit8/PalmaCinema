import Categories from '../models/Categories.js';

export const showCategories = async (req, res) => {
    try {
        const document = await Categories.find({});
        res.json(document);
    } catch (error) {
        console.log(error);
    }
};
export const searchCategories = async (req,res)=>{
    try{
        const { query } = req.params;
        const document = await Categories.find({ name: new RegExp(query, 'i')})
        
        res.json(document);
    }catch(error){
        console.log(error);
    }
}

export const showCategory = async (req,res)=>{
    const document = await Categories.findById(req.params.idCategory);
    if(!document){
        res.json({mensaje: 'Esa categoria no existe'})
    }
    res.json(document)
}
export const updateCategory = async (req,res)=>{
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body._id };
        const update =  req.body;
        const options = {new : true};

        const document = await Categories.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        console.log(error);
    }
}