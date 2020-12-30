const router = require('express').Router()
const Food = require('../models/Food')
const foodScraper = require('../scrapers/foodScraper')

// desc get all the foods that are in the database
// route GET /foods/
router.get('/', async (req,res)=>{
    try{
        const foods = await Food.find()
        res.status(200).json(foods)
    }catch(err){
        console.log(err);
        res.status(400)
    }
    // res.send('connected to /foods')
})

// desc get back a specific food from db
// route GET /foods/:name
router.get('/:name',async(req,res)=>{
    try{
        const food = await Food.findOne({name:req.params.name})
        res.status(200).json(food)
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

// desc add a new food to the database
// route POST /foods/
router.post('/', async (req,res)=>{
    try{

        const Url = `${req.body.food}`
        const foodInfo = foodScraper(Url)
        const newFood = new Food({
            name: req.body.name,
            difficulty : req.body.difficulty
        })
        req.body.ingredients.forEach(ingredient=>{
            const item = {
                ingredient: ingredient.ingredient,
                quantity: ingredient.quantity,
                unit: ingredient.unit
            }
            newFood.ingredients.push(wings)
        })
        newFood.save()
        res.status(200).json(newFood)
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

// desc update a given food
// route PUT /foods/
router.put('/', async (req,res)=>{
    console.log(req.params.name);
    console.log(req.body);
    const {ingredients, difficulty} = req.body
    try{
        if (difficulty){
            const food = await Food.findOneAndUpdate({
                name: req.params.name
            },{$set : {difficulty:difficulty}}).then(food=>{
                res.send(food)
            })
        } 
        // else if(){
        //     // function needed to take each ingredient test against ingredient in array then $set change
        // }else if(){
        //     console.log('');
        // }else{}


    }catch(err){
        console.log(err);
    }
})
router.delete('/delete/:name', async (req,res)=>{
    try{
        await Food.findOneAndDelete({
            name: req.params.name
        }).then(food=>{
            res.send(food)
        })

        // res.status(204).json('completed')
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

module.exports = router