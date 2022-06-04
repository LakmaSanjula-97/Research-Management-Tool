const router = require("express").Router();
const { response } = require("express");
let Marking = require("../models/MarkingScheme");

router.route("/add").post((req, res) => {


    const Name = req.body.Name;
    const type = req.body.type;
    const marking_scheme = req.body.marking_scheme;
    const mDate = req.body.mDate;
    
    const newMarking = new Marking({
        Name,
        type,
        marking_scheme,
        mDate,
        
    })

    newMarking.save().then(() => {
        res.json("supervisor request added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    Marking.find().then((Marking) => {
        res.json(Marking)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {
        Name,
        type,
        marking_scheme,
        mDate,
    } = req.body;

    const updatepanelMembers = {
        Name,
        type,
        marking_scheme,
        mDate,
    }

    const update = await Marking.findByIdAndUpdate(userId, updatepanelMembers).then(() => {
        res.status(200).send({status: "request data Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Marking.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const markingdata = await Marking.findById(userId).then((Marking) => {
        res.status(200).send({status: "fetched", Marking});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



// export the module
module.exports = router;