const express = require('express');
const router = require('express').Router();

const { getMovies, uploadPhoto, getMoviesById, addMovies, updateMovie, deleteMovie } = require('../controllers/movies.controller');
const multer = require('../middlewares/multer.js');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', getMovies);
router.get('/:id', getMoviesById);
router.post('/uploads', multer, uploadPhoto);
router.post('/', addMovies);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;