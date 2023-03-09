import Movie from '../model/movie.js';

// Get all movies
export const getMovies = async (request, response) => {
    try{
        const movies = await Movie.find();
        response.status(200).json(movies);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the movie in database
export const addMovie = async (request, response) => {
    const movie = request.body;
    
    const newMovie = new Movie(movie);
    try{
        await newMovie.save();
        response.status(201).json(newMovie);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a movie by id
export const getMovieById = async (request, response) => {
    try{
        const movie = await Movie.findById(request.params.id);
        response.status(200).json(movie);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited movie in the database
export const editMovie = async (request, response) => {
    let movie = request.body;

    const editMovie = new Movie(movie);
    try{
        await Movie.updateOne({_id: request.params.id}, editMovie);
        response.status(201).json(editMovie);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of movie from the database
export const deleteMovie = async (request, response) => {
    try{
        await Movie.deleteOne({_id: request.params.id});
        response.status(201).json("Movie details deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Search movies
// export const getSearchMovies = async (request, response) => {
//     try{
//         const movies = await Movie.find(request.body);
//         response.status(200).json(movies);
//         response.send(movies);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }