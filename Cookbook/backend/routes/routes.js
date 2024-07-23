const express = require("express");
const router = express.Router();
const recipies = require("../models/recipe");
const verifyToken = require("../middleware/authMiddleware")


router.get("/recipies",verifyToken, async (req, res) => {
  try{
      const details = await recipies.find({});
  res.json(details);
  }catch(error){
    res.status(400).json();
  }

});

router.get("/recipies/:id", async (req, res) => {
  const courseId = req.params.id;
  const details = await recipies.findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});

router.post("/addrecipies",verifyToken, async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const result = await recipies.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});


router.get("/searchResult/:recipename", async (req, res) => {
  try {
    const data = req.params.recipename;
    console.log(data)
     const result = await recipies.find({'title': { "$regex": data, "$options": "i" }});
     console.log(result)
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
