import express from "express";
import {Book} from '../models/bookModel.js'


const router = express.Router();

// Route to save new books
router.post('/',async(req,res)=>{
    try{
        if( !req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send("Send all required fields: title, author, publishYear");
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook);
        res.status(201).send(book);

    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Book is not saved to database.");
    }
})

// Route to retrive books from database
router.get('/',async (req,res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    }   
    catch(error){
        console.log(error.message);
        res.status(500).send("Can't get the Books.");
    }
})

// Route for retrival of single book 
router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);  
    }
    catch(error){
        console.log("error.message");
        res.status(500).send("No result Found");
    }
})
// Route to Update the book
router.put('/:id',async(req,res)=>{
    try{
        if( !req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send("All fields are mandatory");
        }

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).send("Book not Found")
        }
        else{
            return res.status(200).send("Book updated successfully")
        }
    }
    catch(error){
        console.log("error.message");
        res.status(500).send("Not Updated.")
    }
})

// Route to delete the book
router.delete('/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).send("Book not Found")            
        }
        else{
            return res.status(200).send("Book Deleted Successfully")
        }
    }
    catch(error){
        console.log(error.message);
        res.status(404).send("Book Not Found.")
    }
})

export default router;