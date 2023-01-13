import Users from "../models/Users.js";

export const showUsers = async (req,res)=>{
    try{
        const document = await Users.find({});
        res.json(document);
    } catch (error){
        console.log(error);
    }   
};
export const searchUsers = async (req,res)=>{
    try{
        const { query } = req.params;
        const document = await Users.find({ name: new RegExp(query, 'i')})
        
        res.json(document);
    }catch(error){
        console.log(error);
    }
}

export const showUser = async (req,res)=>{
    const document = await Users.findById(req.params.idUser);
    if(!document){
        res.json({mensaje: 'Ese usuario no existe'})
    }
    res.json(document)
}
export const showUserByUsername = async (req,res)=>{
    try{
        const { username } = req.params;
        const document = await Users.find({ username: username})
        
        res.json(document);
    }catch(error){
        console.log(error);
    }
}

export const updateUser = async (req,res)=>{
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body._id };
        const update =  req.body;
        const options = {new : true};

        const document = await Users.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
}