const router = require('express').Router();

const Item = require('../models/item');

router.get('/', async (req, res, next) => {
  const items = await Item.find({});
  res.render('index', {items});
});

// Add additional routes below:
router.get('/items/create', (req,res,next)=>{
  res.render('create');
});
router.post('/items/create',async(req, res, next)=>{
  const {title, description, imageUrl} = req.body;
  const newItem = new Item({title, description, imageUrl});
  newItem.validateSync();
  if (newItem.errors) {
    res.status(400).send
    res.status(400).render('create', {newItem: newItem});


  } else {
    await newItem.save();
    res.redirect('/');
  }
});
router.get('/items/:itemID', async (req,res,next)=>{
  const id = req.params.itemID;
  const item = await Item.findOne({_id:id});
  res.render('items',{item});
});
module.exports = router;
