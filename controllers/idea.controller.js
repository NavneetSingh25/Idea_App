const ideas=require('../models/ideas.model');

exports.getAllIdeas=(req,res)=>{
    res.status(200).send(ideas);
}