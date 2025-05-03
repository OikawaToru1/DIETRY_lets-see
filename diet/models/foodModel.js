const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: false },
    carbs: { type: Number, required: false },
    fats: { type: Number, required: false }
});

const FoodModel = mongoose.model("FoodModel", foodSchema);

module.exports = FoodModel;


