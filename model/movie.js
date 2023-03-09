import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const movieSchema = mongoose.Schema({

    name: String,
    actor: String,
    actress: String,
    director: String,
    year: Number,
    camera: String,
    producer: String,
    language: String


});

autoIncrement.initialize(mongoose.connection);
movieSchema.plugin(autoIncrement.plugin, 'movie');
// we need to turn it into a model
const postMovie = mongoose.model('movie', movieSchema);

export default postMovie;