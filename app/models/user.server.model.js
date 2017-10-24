var mongoose = require('mongoose');
Schema = mongoose.Schema; //Defining book schema
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
});
mongoose.model('User', UserSchema); //Creating book model