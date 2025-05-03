const express = require("express");
const router = express.Router();
const foodDiaryController = require('../controllers/foodDiary.controller');


router.get("/",foodDiaryController.viewDiary);
router.post("/",foodDiaryController.updateDiary);
