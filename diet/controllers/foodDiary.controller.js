const FoodModel = require('../models/foodModel');

exports.viewDiary =async (req, res)=>{
    try
    {
        const food = await FoodModel.find();
        res.json(food);
    } catch (error) {
        console.log("Error :: viewDiary", error);  
        res.status(400).json({error : error.message})
    }
    
}

exports.updateDiary = async(req, res)=>{
    try {
        const updatedDiary = await FoodModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true
            })
            res.status(200).json(updatedDiary);
        
    } catch (error) {
        console.log("Error :: viewDiary", error);  
        res.status(400).json({error : error.message})
    }
}

