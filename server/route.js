import express from 'express';
import { addMovie, deleteMovie, editMovie, getMovieById, getMovies } from '../controller/movie-controller.js';

const router = express.Router();

router.get('/api/', getMovies);
router.post('/api/add', addMovie);
router.get('/api/:id', getMovieById);
router.put('/api/:id', editMovie);
router.delete('/api/:id', deleteMovie);

export default router;