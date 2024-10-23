var express = require('express');
var router = express.Router();
const Book = require('../model/book');
const { ObjectId } = require('mongodb');


/* GET home page. */
router.get('/', async function(req, res, next) {

    try{
      const books = await Book.find();
      res.render("index",{title:"BookApp",bookList : books})
      // res.json(books);
    }catch(err){
      console.log(err);
    }
  });


router.get('/add-books', function(req, res, next) {
  res.render('add-books');
});



router.post('/save',async function(req, res, next) {
  try{
    const newBook = new Book(req.body);
    await newBook.save();
    console.log("Book Saved: ",newBook);
  }catch(err){
    console.log(err);
  }
  res.redirect("/");
});
router.get('/edit/:id',async function(req, res, next) {
  try{
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    res.render('edit-books',{book});
  }catch(err){
    console.log(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    const bookId = req.params.id;
    const updatedData = req.body; 
    await Book.findByIdAndUpdate(bookId, updatedData, { new: true }); 
    res.redirect("/"); 
  } catch (err) {
    console.log(err);
    res.status(500).send("Cannot update book.");
  }
});



router.post('/delete/:id',async function(req, res, next) {
  try{
   const bookId = req.params.id;
   console.log('Delete book with id', bookId);
   await Book.findByIdAndDelete(new ObjectId(bookId));
   res.redirect("/");
  }catch(err){
   console.log(err); 
   res.status(500).send("Cannot delete book.");
  }
});
 
 
module.exports = router;
