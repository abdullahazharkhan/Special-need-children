const router = require('express').Router();
const Member = require('../modules/member');
const {body,validationResult} = require('express-validator');
const status = false;

// ==>> route for posting the students information
router.post('/',[
    body('name','please enter a name').exists(),
    body('category','please enter a category').exists(),
    body('team','please enter a team name').exists(),
],

async (req,res) => {

    try{
        const result = validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).json({status, error : result.array()});
        }   

        const {name,id,email,image,category,team} = req.body;

        const mem = await Member.create({
            name,
            id : id ? id : '',
            email : email ? email : '',
            image : image ? image : '',
            category,
            team
        })

        res.status(200).json({status : !status, msg : 'member saved successfully'});

    }catch(error){
        res.status(400).json({status, error : 'Something went wrong !'});
    }
    
});

// -- Updating a member info
router.put('/:id', async (req,res) => {
    try {
        const mem = await Member.find({id: req.params.id})
        if(!mem){
            res.status(404).json({status, error : "no member found agains this id"});
        }
        else{

            const {name,id,email,image,category,team} = req.body;
            let updated = {};
            
            if(name) updated.name = name;
            if(id) updated.id = id;
            if(email) updated.email = email;
            if(image) updated.image = image;
            if(category) updated.category = category;
            if(team) updated.team = team;
            const result = await Member.findByIdAndUpdate(mem[0]._id,{$set : updated},{new : true});
            if(!result){
                res.status(500).json({status,error : "something went wrong"});
            }
            else{
                res.status(200).json({status : !status, msg : "member updated successfully", member : result});
            }

        }
    } catch (error) {
        res.status(400).json({status, error : 'Something went wrong !'});
    }
});

// ==> Retrieving all members
router.get('/', async (req,res) => {

    try{

        const mem = await Member.find({});
        res.status(200).json({status : !status, msg : 'members fetched successfully !',members : [...mem]});

    }catch(error){
        res.status(400).json({status, error : 'Something went wrong !'});
    }
    
});

// >> Retrieving by id
router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Member.find({id});

        if(!result.length) res.status(400).json({status, error : 'No member found'});
        else res.status(200).json({status : !status, msg : "member found successfully", member : result});
    } catch (error) {
        res.status(400).json({status, error : 'Something went wrong !'});
    }
});

// Retrieving members on the basis of team
router.get('/team/:team',async (req,res) =>{
    
    try {
        const result = await Member.find({team : req.params.team});
        if(result.length > 0) res.status(200).json({status : !status, msg : `members fetched for ${req.params.team}`, members : [...result]});    
        else res.status(200).json({status, error : `no member found for ${req.params.team}!`});
    } catch (error) {
        res.status(400).json({status, error : 'Something went wrong !'});
    }
    
});

// Deleting member by mongoDB id

router.delete('/remove/:id', async (req,res) => {
    try{
        const result = await Member.findByIdAndDelete(req.params.id,(err,removedMem) => {
            if(err){
                res.status(500).json({status, msg : err})
            }
            else{
                res.status(200).json({status : !status, msg : `sucessfully removed member with id : ${removedMem.id}`});
            }
        });    
    } catch (error) {
        res.status(400).json({status, error : 'Something went wrong !'});
    }
});

module.exports = router;