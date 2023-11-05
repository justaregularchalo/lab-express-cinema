const express = require('express');
const Movie = require('../models/Movies.model');
const router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/* GET/movies => para mostras todas las películas*/

router.get("/movies", (req, res, next) =>{


    Movie.find()
    .select({image:1, title:1})
    .then((response)=>{

        console.log(response)
        res.render("movies/list.hbs", {

            allMovies: response
        })

    })


    .catch((error)=>{

        next(error)
    })




})

/* GET/movies/:moviesId => para mostras detalles de las pelis*/

router.get("/movies/:moviesId", async (req,res, next) => {

    try{

         console.log(req.params)   
        const response = await Movie.findById (req.params.moviesId)
        res.render("movies/details.hbs", {

           oneMovie : response     

        })

    } catch(error){
        next(error)
    }



})




// roouter.get("/movies"), ()

module.exports = router;