import mongoose from 'mongoose';

// const Connection = async (username, password) => {
function Connection () {

   
  const URL=`mongodb+srv://nithu:nithu@cluster0.srt4i.mongodb.net/?retryWrites=true&w=majority`
    // try {
      

        // await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    // } catch(error) {
    //     console.log('Error: ', error.message);
    // }
}

export default Connection;